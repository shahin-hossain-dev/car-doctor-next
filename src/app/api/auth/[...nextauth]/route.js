import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

const handler = NextAuth({
  // auth options
  // jwt session
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        // label, placeholder দিলে আলাদা করে page create করে
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {},
  // pages হচ্ছে আমরা next auth default login form use না করে custom টা use করবো, page এর route গুলো এখানে define করে দিবো।
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      // google/github user er info database e save kora jonno
      if (account.provider === "google" || account.provider === "github") {
        const { name, email, image } = user;
        // console.log(user);
        try {
          const db = await connectDB();
          const usersCollection = await db.collection("users");
          const userExist = await usersCollection.findOne({ email });
          if (!userExist) {
            const resp = await usersCollection.insertOne(user);
            return user;
          } else {
            return user;
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        return user;
      }
    },
  },
});

export { handler as GET, handler as POST };

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
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
        return true;
      },
    }),
  ],
  callbacks: {},
  // pages হচ্ছে আমরা next auth default login form use না করে custom টা use করবো, page এর route গুলো এখানে define করে দিবো।
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };

import { cookies } from "next/headers";

import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = cookies(request).get("next-auth.session-token");
  //   console.log(token);

  const pathname = request.nextUrl.pathname;

  //api route যেন match করে block না হয়ে যায়।
  //   if (pathname.includes("api")) {
  //     return NextResponse.next();
  //   }
  console.log(pathname);
  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url) //?redirect=${pathname} হলো যখন login page এ যাবে তখন path name সাথে যাবে।
    );
  }
  return NextResponse.next();
};

export const config = {
  //matcher হলো কোন রাউট গুলোর উপর middleware কাজ করবে, সেগুলো এখানে match করার জন্য define করে দিতে হবে।
  matcher: ["/my-bookings/:path*", "/services/:path*", "/checkout/:path*"],
};

// middleware steps :

/**
 * 1. create middleware function with export
 * 2. create config object with export
 * 3. return NextResponse.next() from middleware function
 * 4. define request parameter
 *
 */

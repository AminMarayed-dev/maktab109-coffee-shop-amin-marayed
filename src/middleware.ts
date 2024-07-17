import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/dashboard")) {
    const role = req.cookies.get("role")?.value;
    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", url));
    }
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/login/:path*"],
};

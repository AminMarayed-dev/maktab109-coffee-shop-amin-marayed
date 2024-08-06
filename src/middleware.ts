import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/dashboard")) {
    const role = req.cookies.get("role")?.value;
    const accessToken = req.cookies.get("accessToken")?.value;

    if (accessToken && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/", url));
    }
  }
  if (
    pathname.startsWith("/payment") ||
    pathname.startsWith("/result-payment")
  ) {
    const role = req.cookies.get("role")?.value;
    const accessToken = req.cookies.get("accessToken")?.value;
    if (!accessToken && role !== "USER") {
      return NextResponse.redirect(new URL("/auth/login", url));
    }
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/auth/login/:path*",
    "/payment/:path*",
    "/result-payment/:path*",
  ],
};

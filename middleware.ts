import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { auth } from "@/lib/auth";

export const publicRoutes = ["/"];

// Middleware d'internationalisation
const intlMiddleware = createIntlMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const session = await auth();

  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';

  if (process.env.NODE_ENV === "production") {
    console.log(`Page dans le middleware : "${pathWithoutLocale}"`)
  };

  if (pathWithoutLocale.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const isPublicPage = publicRoutes.some(route => pathWithoutLocale === route || pathWithoutLocale.startsWith(route + '/'));

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    if (!session) {
      let callbackUrl = pathname;
      if (req.nextUrl.search) {
        callbackUrl += req.nextUrl.search;
      }

      const encodedCallbackUrl = encodeURIComponent(callbackUrl);
      const loginUrl = new URL(`/?callbackUrl=${encodedCallbackUrl}`, req.url);

      return NextResponse.redirect(loginUrl);
    }

    return intlMiddleware(req);
  }
}

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|_vercel).*)",
    "/",
    "/(api|trpc)(.*)",
  ]
};
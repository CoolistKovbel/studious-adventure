import type { NextRequest } from "next/server";
import { apiAuthPrefix, publicRoutes } from "@/routes";


export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const isLoggedIn = request.cookies.has("ai-session");

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  

  if (isApiAuthRoute) {
    return null;
  }

  if(!isPublicRoute && !isLoggedIn){
    console.log(nextUrl.pathname)                  
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};



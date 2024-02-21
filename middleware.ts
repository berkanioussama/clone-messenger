import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { DEFAULT_LOGIN_REDIRECT, apiAuthPrifix, authRoutes, publicRoutes } from "@/routes";

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  // req.auth
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrifix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if(isApiAuthRoute){
    return null
  }

  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null
  }

  if(!isLoggedIn){

    return Response.redirect(new URL(
      `/auth/login`, 
      nextUrl
    ))
  }

  // after all
  return null;

})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
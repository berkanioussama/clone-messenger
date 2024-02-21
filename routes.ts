/** defult redirect path after loggin in */
export const DEFAULT_LOGIN_REDIRECT = "/"

export const publicRoutes = [
    /** the pathes can see it with out log in */
    "/",
]

/** prefix for api authentication routes */
export const apiAuthPrifix = "/api/auth"

export const authRoutes = [
    /** the pathes used for authentication*/
    "/auth/login",
    "/auth/register",
    "/auth/error",
]

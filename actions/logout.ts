"use server"

import { signOut } from "@/auth"

export const logout = async () => {
    // some server stuff before user logout
    await signOut()
}
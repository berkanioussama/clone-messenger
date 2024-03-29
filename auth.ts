import NextAuth from "next-auth"
import authConfig from '@/auth.config'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/prisma/db"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({

    /* pages: {

    },

    events: {

    },

    callbacks: {

    }, */

    // to connect database
    adapter: PrismaAdapter(db),
    
    session: {strategy: "jwt"},

    // spred providers from config file
    ...authConfig
})
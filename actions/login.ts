'use server'

import { signIn } from '@/auth'
import * as z from 'zod'
import { LoginSchema } from '@/schemas'

import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { getUserByEmail } from '@/data/users'

export const login = async (values: z.infer<typeof LoginSchema>)=>{

    // if user enter valid form
    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) {
        return {error: "Invalid Email or Password"}
    }

    const {email, password} = validatedFields.data

    // stop non users
    const existingUser = await getUserByEmail(email)

    if(!existingUser || !existingUser.email || !existingUser.password){
        return {error: "Email does not exist!"}
    }

    // try to login
    try{

        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT    
        })

        return {success: "Success login"}

    }catch(error){

        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error: "Invalid Email or Password"}
                default:
                    return {error: "Somthing went wrong with credentials!"}
            }
        }

        throw error;
    }

}
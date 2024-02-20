'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { db } from '@/prisma/db'
import { RegisterSchema } from '@/schemas'
import { getUserByEmail } from '@/data/users'

export const register = async (values: z.infer<typeof RegisterSchema>)=>{

    // if user enter valid form
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return {error: "Invalid Email or Name or Password"}
    }

    const { email, name, password } = validatedFields.data

    const hashedPassword = await bcrypt.hash(password, 10)

    // logic
    const existingUser = await getUserByEmail(email)

    if(existingUser){
        return {error: "This Email already in use"}
    }

    await db.user.create({
        data:{
            name,
            email,
            password: hashedPassword
        }
    })

    return {success: "Registration success!"}
}
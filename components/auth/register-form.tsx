'use client'

import { register } from "@/actions/register";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import Link from "next/link"
import FormError from "@/components/auth/form-error"
import FormSuccess from "@/components/auth/form-seccess"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const RegisterForm = () => {

    const [error,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    const [isPanding, startTransition] = useTransition()

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
          email: "",
          name: "",
          password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>)=>{
        startTransition(()=>{
            register(values)
                .then((data)=>{
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }
    
    return (
        <Form {...form}>
            <form 
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField 
                    control={form.control} 
                    name="email"
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input 
                                    {...field}
                                    type="email"
                                    disabled={isPanding}
                                    placeholder='Email'
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={form.control} 
                    name="name"
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input 
                                    {...field}
                                    type="text"
                                    disabled={isPanding}
                                    placeholder='Name'
                                    className="h-11 mt-3 px-4 text-base"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField 
                    control={form.control} 
                    name="password"
                    render={({field})=>(
                        <FormItem>
                            <FormControl>
                                <Input 
                                    {...field}
                                    type="password"
                                    disabled={isPanding}
                                    placeholder='Password'
                                    className="h-11 mt-3 px-4 text-base"
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormError message={error} />
                <FormSuccess message={success} />
                <Button type='submit' className='w-full text-base mt-6' disabled={isPanding}>
                    Register
                </Button>
            </form>
        </Form>
    );
}
 
export default RegisterForm;
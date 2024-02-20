'use client'

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import { login } from '@/actions/login'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FormError from "@/components/auth/form-error"
import FormSuccess from "@/components/auth/form-seccess"

const LoginForm = () => {

    const [isPanding, startTransition] = useTransition()
    const [error,setError] = useState<string | undefined>("")
    const [success,setSuccess] = useState<string | undefined>("")

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>)=>{
        startTransition(()=>{

            login(values)
                .then((data)=>{
                    if (data?.error) {
                        form.reset()
                        setError(data?.error)
                    }
                    if (data?.success) {
                        form.reset()
                        setSuccess(data?.success)
                    }
                })
                    .catch(()=>setError("Somthing went wrong in login"))
            
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
                            <Button size="sm" variant="link" asChild className='px-0 font-normal'>
                                <Link href="/auth/reset">
                                    Forget password?
                                </Link>
                            </Button>
                        </FormItem>
                    )}
                />

                <FormError message={error} />

                <FormSuccess message={success} />

                <Button type='submit' className='w-full text-base' disabled={isPanding}>
                    Login
                </Button>
            </form>
        </Form>
    );
}
 
export default LoginForm;
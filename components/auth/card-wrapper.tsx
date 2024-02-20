'use client'

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Image from "next/image";
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

interface CardWrapperProps{
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

const CardWrapper = ({children,headerLabel,backButtonLabel,backButtonHref,showSocial}: CardWrapperProps) => {

    const handleClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <Card className="w-full border-none shadow-none flex flex-col justify-center items-center">

            <CardHeader className='w-full flex flex-col gap-y-4 justify-center items-center'>
                <Image src="/images/logo.svg" alt={"Messenger logo"} width={75} height={75}/>
                <h1 className='text-4xl text-neutral-900'>
                    {headerLabel}
                </h1>
            </CardHeader>

            <CardContent className="w-[23rem]">
                {children}
            </CardContent>

            {showSocial && (
                <CardFooter className="w-full flex gap-x-2 items-center max-w-[23rem]">
                    <Button 
                        size="lg" 
                        variant="outline" 
                        className='w-full' 
                        onClick={()=>handleClick("google")}
                    >
                        <FcGoogle className="w-5 h-5"/>
                    </Button>
                    <Button 
                        size="lg" 
                        variant="outline" 
                        className='w-full' 
                        onClick={()=>handleClick("github")}
                    >
                        <FaGithub className="w-5 h-5"/>
                    </Button>
                </CardFooter>
            )}
            
            <CardFooter>
                <Button variant="link" size="sm" asChild className='w-full' >
                    <Link href={backButtonHref}>
                        {backButtonLabel}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default CardWrapper;
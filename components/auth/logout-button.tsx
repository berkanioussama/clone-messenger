'use client'

import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

interface LogoutButtonProps{
    children: React.ReactNode;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({children}) => {

    const router = useRouter()
    const handleClick = ()=>{
        logout()
    }

    return (
        <div onClick={handleClick} className="cursor-pointer">
            {children}
        </div>
    );
}
 
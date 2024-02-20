import { ExtendedUser } from "@/next-auth";

interface UserInfoProps{
    user?: ExtendedUser
}

const UserInfo = ({user}: UserInfoProps) => {
    return (
        <div>
            <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-sm">
                    <p>
                        ID: 
                    </p>
                    <p className="p-1 text-xs text-mono bg-slate-100 rounded-md">
                        {user?.id}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-sm">
                    <p>
                        NAME: 
                    </p>
                    <p className="p-1 text-mono bg-slate-100 rounded-md">
                        {user?.name}
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center p-3 rounded-lg border shadow-sm">
                    <p>
                        Email: 
                    </p>
                    <p className="p-1 text-mono bg-slate-100 rounded-md">
                        {user?.email}
                    </p>
                </div>
        </div>
    );
}
 
export default UserInfo;
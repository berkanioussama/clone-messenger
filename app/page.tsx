import { LogoutButton } from "@/components/auth/logout-button";
import UserInfo from "@/components/auth/user-info";
import { CurrentUser } from "@/data/current-user";
import { ExitIcon } from "@radix-ui/react-icons";


export default async function Home() {

  const user = await CurrentUser()
  
  return (
    <div className="h-svh flex justify-center items-center">
      <LogoutButton>
          <ExitIcon className="mr-2"/>
          Logout
      </LogoutButton>
      <UserInfo user={user} />
    </div>
  );
}

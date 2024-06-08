import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="relative mx-auto flex max-w-7xl items-center px-4 py-7 md:grid md:grid-cols-12 md:px-8">
      <div className="md:col-span-3">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Ultra<span className="text-primary">Ui</span>
          </h1>
        </Link>
      </div>
      <NavbarLinks />
      <div className="ms-auto flex items-center justify-center gap-x-2 md:col-span-3">
        {user ? (
          <UserNav
            name={user.given_name as string}
            email={user.email as string}
            userImg={
              user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
            }
          />
        ) : (
          <>
            <Button asChild variant={"secondary"}>
              <LoginLink>Login</LoginLink>
            </Button>
            <Button asChild>
              <RegisterLink>Register</RegisterLink>
            </Button>
          </>
        )}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
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
        <Button variant={"secondary"}>Login</Button>
        <Button>Register</Button>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

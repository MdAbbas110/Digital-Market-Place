"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbarLinks } from "@/lib/config";

const NavbarLinks = () => {
  const location = usePathname();
  return (
    <div className="col-span-6 hidden items-center justify-center gap-x-3 md:flex">
      {navbarLinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.href}
            className={cn(
              location === link.href
                ? "bg-muted text-primary"
                : "hover:bg-muted hover:bg-opacity-75",
              "group flex items-center rounded-md px-2 py-2 font-medium",
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarLinks;

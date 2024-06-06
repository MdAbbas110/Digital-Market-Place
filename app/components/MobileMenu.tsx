"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navbarLinks } from "@/lib/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
  const location = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant={"outline"}>
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="mt-5 flex flex-col space-y-1 px-2">
            {navbarLinks.map((items) => {
              return (
                <Link
                  key={items.id}
                  href={items.href}
                  className={cn(
                    location === items.href
                      ? "bg-muted text-primary"
                      : "hover:bg-muted hover:bg-opacity-75",
                    "group flex items-center rounded-md px-2 py-2 font-medium",
                  )}
                >
                  {items.name}
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

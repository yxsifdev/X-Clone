"use client";

import Image from "next/image";
import xLogotipo from "@/images/logo-white.png";
import { LinksNavigationLeft } from "@/consts/links";
import Link from "next/link";
import XIcon from "@/icons/Navigation/XIcon";
import HomeIcon from "@/icons/Navigation/HomeIcon";
import { usePathname } from "next/navigation";
import UserProfile from "./UserProfile";
import { NavigationLeftProps } from "@/types/userSession";

function NavigationLeft({ user }: NavigationLeftProps) {
  const path = usePathname();
  return (
    <>
      <div className="hidden lg:flex flex-col justify-between h-screen py-3 pr-3 w-[250px] space-y-7 overflow-x-hidden overflow-y-auto border-r border-border_color">
        <div className="space-y-6">
          <XIcon className="ml-4 size-6" />
          <nav className="flex flex-col gap-3">
            {LinksNavigationLeft.map((link, index) => (
              <Link
                className={`inline-flex items-center gap-2 text-xl hover:bg-white/10 transition rounded-full w-max px-3 py-1.5 ${
                  path === link.href ? "font-bold" : "font-light"
                }`}
                href={link.href}
                key={index}
              >
                <HomeIcon className="size-8" /> {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="ml-4">
          <UserProfile user={user} />
        </div>
      </div>
    </>
  );
}

export default NavigationLeft;

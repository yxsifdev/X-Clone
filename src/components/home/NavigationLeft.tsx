"use client";

import Image from "next/image";
import xLogotipo from "@/images/logo-white.png";
import { LinksNavigationLeft } from "@/consts/links";
import Link from "next/link";
import XIcon from "@/icons/Navigation/XIcon";
import HomeIcon from "@/icons/Navigation/HomeIcon";
import { usePathname } from "next/navigation";

function NavigationLeft() {
  const path = usePathname();
  return (
    <>
      <div className="hidden h-screen py-3 w-[250px] space-y-7 overflow-x-hidden overflow-y-auto  border-r lg:block border-border_color">
        <div className="">
          <XIcon className="size-6" />
        </div>
        <nav className="flex flex-col gap-6">
          {LinksNavigationLeft.map((link, index) => (
            <Link
              className={`inline-flex items-center gap-2 -mx-1 text-xl ${
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
    </>
  );
}

export default NavigationLeft;

"use client";

import Link from "next/link";
import XIcon from "@/icons/Navigation/XIcon";
import { usePathname } from "next/navigation";
import { NavigationLeftProps } from "@/types/userSession";
import UserProfile from "./UserProfile";

import HomeIcon from "@/icons/Navigation/HomeIcon";
import SearchIcon from "@/icons/Navigation/SearchIcon";
import NotificationIcon from "@/icons/Navigation/NotificationIcon";
import MessageIcon from "@/icons/Navigation/MessageIcon";
import SavedIcon from "@/icons/Navigation/Saved";
import CommunityIcon from "@/icons/Navigation/CommunityIcon";
import OrgsIcon from "@/icons/Navigation/OrgsIcon";
import ProfileIcon from "@/icons/Navigation/ProfileIcon";
import OptionsIcon from "@/icons/Navigation/OptionsIcon";
import GrokIcon from "@/icons/Navigation/GrokIcon";
import JobsIcon from "@/icons/Navigation/JobsIcon";

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
                {link.icon} {link.label}
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

export const LinksNavigationLeft = [
  { label: "Inicio", href: "/home", icon: <HomeIcon className="size-8" /> },
  {
    label: "Explorar",
    href: "/explore",
    icon: <SearchIcon className="size-8" />,
  },
  {
    label: "Notificaciones",
    href: "/notifications",
    icon: <NotificationIcon className="size-8" />,
  },
  {
    label: "Mensajes",
    href: "/messages",
    icon: <MessageIcon className="size-8" />,
  },
  { label: "Grok", href: "/grok", icon: <GrokIcon className="size-8" /> },
  {
    label: "Guardados",
    href: "/saves",
    icon: <SavedIcon className="size-8" />,
  },
  { label: "Trabajos", href: "/jobs", icon: <JobsIcon className="size-8" /> },
  {
    label: "Comunidades",
    href: "/community",
    icon: <CommunityIcon className="size-8" />,
  },
  {
    label: "Premium",
    href: "/premium",
    icon: <XIcon className="size-6" />,
  },
  {
    label: "Organizaciones",
    href: "/orgs",
    icon: <OrgsIcon className="size-8" />,
  },
  {
    label: "Perfil",
    href: "/profile",
    icon: <ProfileIcon className="size-8" />,
  },
  {
    label: "Más opciones",
    href: "/more-options",
    icon: <OptionsIcon className="size-8" />,
  },
];

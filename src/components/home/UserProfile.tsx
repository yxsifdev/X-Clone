import { NavigationLeftProps } from "@/types/userSession";
import Image from "next/image";
import userImage from "@/images/yxsifdev_av.webp";
import VerifiedIcon from "@/icons/VerifiedIcon";

function NavigationLeft({ user }: NavigationLeftProps) {
  return (
    <button className="navigation-left hover:bg-white/10 transition rounded-full w-full px-3 py-1.5">
      <div className="flex items-center gap-3">
        <Image
          src={userImage}
          alt="Logo X Clone"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-1 text-sm font-bold">
            {user?.name || "unknown"} <VerifiedIcon />
          </span>
          <p className="text-sm text-text_color">@{user?.name || "unknown"}</p>
        </div>
      </div>
    </button>
  );
}

export default NavigationLeft;

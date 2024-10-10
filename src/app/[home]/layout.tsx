import type { Metadata } from "next";
import NavigationLeft from "@/components/home/NavigationLeft";
import NavigationRight from "@/components/home/NavigationRight";

export const metadata: Metadata = {
  title: "Inicio / X",
  description: "X Clone by yxsifdev",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto my-0 max-w-7xl xl:p-0">
      <div className="grid min-h-screen grid-cols-[250px_1fr_370px]">
        <NavigationLeft />
        {children}
        <NavigationRight />
      </div>
    </main>
  );
}

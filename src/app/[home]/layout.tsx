import type { Metadata } from "next";
import NavigationLeft from "@/components/home/NavigationLeft";
import NavigationRight from "@/components/home/NavigationRight";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Inicio / X",
  description: "X Clone by yxsifdev",
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <main className="mx-auto my-0 max-w-7xl xl:p-0">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[250px_1fr_370px]">
        <NavigationLeft user={session?.user} />
        <section>{children}</section>
        <NavigationRight />
      </div>
    </main>
  );
}

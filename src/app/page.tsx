"use client";

import Image from "next/image";
import xLogotipo from "@/images/logo-white.png";
import GoogleIcon from "@/icons/GoogleIcon";
import AppleIcon from "@/icons/AppleIcon";
import { useEffect, useState } from "react";
import RegisterForm from "@/components/auth/RegisterForm";
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";

// Define the type for the session response
interface Session {
  user: {
    name?: string;
    email?: string;
    image?: string;
  } | null;
  expires: string;
}

function Home() {
  const [register, setRegisterStatus] = useState(false);
  const [login, setLoginStatus] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("/api/session");
        const data = await res.json();
        setSession(data.session);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSession();
  }, []);

  useEffect(() => {
    if (session) {
      router.push("/home");
      router.refresh();
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [session, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white bg-red">
        <Image src={xLogotipo} alt="Logo X Clone" width={50} height={50} />
      </div>
    );
  }

  return (
    <>
      {register && <RegisterForm onClose={() => setRegisterStatus(false)} />}
      {login && <LoginForm onClose={() => setLoginStatus(false)} />}
      <div className={`flex min-h-screen text-white bg-black`}>
        <div className="flex items-center justify-center w-1/2">
          <Image src={xLogotipo} alt="Logo X Clone" width={300} height={300} />
        </div>
        <div className="flex flex-col justify-center w-1/2 p-8">
          <h1 className="mb-12 text-6xl font-bold">
            Lo que está <br /> pasando ahora
          </h1>
          <h2 className="mb-8 text-3xl font-bold">Únete Hoy</h2>

          <div className="max-w-[330px] space-y-3">
            <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-full">
              <GoogleIcon className="size-4" /> Registrarse con Google
            </button>
            <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-full">
              <AppleIcon className="size-4" /> Registrarse con Apple
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="px-4">o</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <button
              onClick={() => setRegisterStatus(true)}
              className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium bg-[#1D9BF0] text-white rounded-full"
            >
              Crear cuenta
            </button>

            <p className="text-xs text-gray-500">
              Al registrarte, aceptas los{" "}
              <a href="#" className="text-[#1D9BF0]">
                Términos de servicio
              </a>{" "}
              y la{" "}
              <a href="#" className="text-[#1D9BF0]">
                Política de privacidad
              </a>
              , incluida la política de{" "}
              <a href="#" className="text-[#1D9BF0]">
                Uso de Cookies
              </a>
              .
            </p>
            <br />
            <div>
              <p className="mb-4 font-bold">¿Ya tienes una cuenta?</p>
              <button
                onClick={() => setLoginStatus(true)}
                className="w-full py-2 px-4 rounded-full font-medium text-[#1D9BF0] border border-gray-600 hover:bg-[#1D9BF0]/10 transition-colors"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

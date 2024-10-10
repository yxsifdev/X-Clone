"use client";

import Image from "next/image";
import xLogotipo from "@/images/logo-white.png";
import GoogleIcon from "@/icons/GoogleIcon";
import AppleIcon from "@/icons/AppleIcon";
import CloseIcon from "@/icons/CloseIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface LoginFormProps {
  onClose: () => void;
}

interface InputsLogin {
  identifier: string;
  password: string;
}

function LoginForm({ onClose }: LoginFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsLogin>();
  const [message, setMessage] = useState<string | null>(null);
  const [segundoForm, setSegundoForm] = useState(false);
  const [identifier, setIdentifier] = useState<string | "">("");

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setMessage(null);
      console.log(data);
      setIdentifier(data.identifier);
      setSegundoForm(!segundoForm);
    } catch (error) {
      console.log(error);
      setMessage("Ha ocurrido un error");
    }
  });

  const onSubmitLogin = handleSubmit(async (data) => {
    try {
      setMessage(null);
      const res = await signIn("credentials", {
        identifier: data.identifier,
        password: data.password,
        redirect: false,
      });
      if (res?.error) {
        setMessage("Credenciales incorrectas.");
      } else {
        router.push("/home");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
      setMessage("Ha ocurrido un error");
    }
  });

  return (
    <div className="fixed w-full h-full bg-blue-300/20">
      <div className="fixed z-10 w-[500px] select-none transform -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 left-1/2 px-3 py-2 h-[500px] rounded-lg">
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20"
          >
            <CloseIcon className="rotate-45" />
          </button>
          <Image src={xLogotipo} alt="Logo X Clone" width={20} height={20} />
          <div className="w-[50px]"></div>
        </div>
        {!segundoForm ? (
          <div className="w-[300px] py-5 mx-auto my-0">
            <h2 className="mb-8 text-3xl font-bold">Inicia sesión en X</h2>
            <div className="space-y-4">
              <button className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-full">
                <GoogleIcon className="size-4" /> Iniciar sesión con Google
              </button>
              <button className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-full">
                <AppleIcon className="size-4" /> Iniciar sesión con Apple
              </button>
            </div>
            <div className="flex items-center my-2">
              <div className="flex-grow border-t border-input_border"></div>
              <span className="px-4">o</span>
              <div className="flex-grow border-t border-input_border"></div>
            </div>
            <form onSubmit={onSubmit}>
              <div className="my-4">
                <input
                  type="text"
                  placeholder="Correo electrónico o nombre de usuario"
                  {...register("identifier", { required: true })}
                  className="w-full p-2 font-light bg-transparent border rounded border-input_border placeholder:text-slate-300/60"
                />
                {errors.identifier && (
                  <div className="mt-2">
                    <span className="text-sm text-red-500">
                      Ingresa un correo o nombre de usuario válido.
                    </span>
                  </div>
                )}
                {message && (
                  <span className="text-sm text-red-500">{message}</span>
                )}
              </div>
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full gap-2 px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-full"
                >
                  Siguiente
                </button>
                <button className="w-full gap-2 px-4 py-2 text-sm font-semibold border rounded-full border-blue-200/30">
                  ¿Olvidaste tu contraseña?
                </button>
                <div>
                  <p className="mt-10 text-sm text-white/30">
                    ¿No tienes cuenta?{" "}
                    <span className="text-blue-400">Registrarse</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-[370px] py-5 mx-auto my-0">
            <form
              onSubmit={onSubmitLogin}
              className="flex flex-col justify-between h-[390px]"
            >
              <div>
                <h2 className="mb-8 text-3xl font-bold">
                  Introduce tu contraseña
                </h2>
                <div className="space-y-4">
                  <input
                    readOnly
                    type="text"
                    value={identifier}
                    {...register("identifier", { required: true })}
                    placeholder="Correo electrónico o nombre de usuario"
                    className="w-full px-2 py-4 font-light rounded outline-none bg-input_bg text-slate-300/30"
                  />
                  {errors.identifier && (
                    <div className="mt-2">
                      <span className="text-sm text-red-500">
                        Ingresa un correo o nombre de usuario válido.
                      </span>
                    </div>
                  )}
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Contraseña"
                    className="w-full px-2 py-4 font-light text-white bg-transparent border rounded outline-none text-slate-300/30 border-input_border_2"
                  />
                  {errors.password && (
                    <div className="mt-2">
                      <span className="text-sm text-red-500">
                        La contraseña que has ingresado no es válida.
                      </span>
                    </div>
                  )}
                  {message && (
                    <span className="text-sm text-red-500">{message}</span>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full gap-2 px-4 py-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-full"
                >
                  Iniciar sesión
                </button>
                <div>
                  <p className="mt-5 text-sm text-white/30">
                    ¿No tienes cuenta?{" "}
                    <span className="text-blue-400">Registrarse</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;

"use client";

import Image from "next/image";
import xLogotipo from "@/images/logo-white.png";
import CloseIcon from "@/icons/CloseIcon";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface InputsRegister {
  username: string;
  email: string;
  password: string;
}

interface RegisterFormProps {
  onClose: () => void; // Tipo de la función onClose
}

function RegisterForm({ onClose }: RegisterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsRegister>();

  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (data) => {
    setMessage(null);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resJSON = await res.json();

      if (res.ok) {
        setMessage(resJSON.message);
      } else {
        setError(resJSON.message);
      }
    } catch (error) {
      console.log(error);
      setError("Error de conexión o servidor. Inténtalo de nuevo.");
    }
  });

  return (
    <div className="fixed w-full h-full bg-blue-300/20">
      <div className="fixed z-10 w-[550px] select-none transform -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 left-1/2 px-3 py-2 h-[500px] rounded-lg">
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
        <div className="w-[400px] py-5 mx-auto my-0">
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-between h-[390px]"
          >
            <div>
              <h2 className="mb-8 text-3xl font-bold">Crea tu cuenta</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  {...register("username", { required: true })}
                  className="w-full px-2 py-4 font-light text-white bg-transparent border rounded outline-none text-slate-300/30 border-input_border_2"
                />
                {errors.username && (
                  <span className="text-sm text-red-500">
                    Ingresa el nombre de usuario.
                  </span>
                )}
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  {...register("email", { required: true })}
                  className="w-full px-2 py-4 font-light text-white bg-transparent border rounded outline-none text-slate-300/30 border-input_border_2"
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Ingresa el correo electrónico.
                  </span>
                )}

                <input
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", { required: true })}
                  className="w-full px-2 py-4 font-light text-white bg-transparent border rounded outline-none text-slate-300/30 border-input_border_2"
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    Ingresa la contraseña.
                  </span>
                )}
                <br />
                {message && (
                  <div>
                    <span className="text-sm text-green-400">{message}</span>
                  </div>
                )}
                {error && <div className="text-sm text-red-500">{error}</div>}
              </div>
            </div>
            <br />
            <div className="space-y-3">
              <button
                type="submit"
                className="w-full gap-2 px-4 py-3 text-sm font-medium text-black bg-white border border-gray-200 rounded-full"
              >
                Siguiente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;

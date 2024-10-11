import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { StaticImageData } from "next/image";
import userImage from "@/images/yxsifdev_av.webp";
import { useRouter } from "next/navigation";
import WorldIcon from "@/icons/WorldIcon";
import ImageIcon from "@/icons/ImageIcon";
import GifIcon from "@/icons/GifIcon";
import PollIcon from "@/icons/PollIcon";
import EmojiIcon from "@/icons/EmojiIcon";
import DateIcon from "@/icons/DateIcon";
import LocationIcon from "@/icons/LocationIcon";

interface FormInputs {
  content: string;
}

type IconComponent = React.FC<{ className?: string }>;

function SendPostComponent() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<FormInputs>();

  const [showOptions, setOptions] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const content = watch("content", "");

  const showOption = (): void => {
    setOptions(true);
  };

  const onSubmit = handleSubmit(async (data: FormInputs) => {
    setMessage(null);
    setError(null);

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setMessage("¡Publicación enviada exitosamente!");
        reset();
      } else {
        const responseData = await res.json();
        setError(responseData.error || "Error al crear la publicación");
      }
    } catch (error) {
      console.error(error);
      setError("Error de conexión. Por favor, inténtalo de nuevo.");
    }
  });

  const isContentValid = (content: string): boolean => {
    return content.trim().length > 0;
  };

  const icons: IconComponent[] = [
    ImageIcon,
    GifIcon,
    PollIcon,
    EmojiIcon,
    DateIcon,
    LocationIcon,
  ];

  return (
    <div className="p-4 border-b pr-7 border-border_color">
      {message && (
        <div className="p-2 mb-4 text-sm text-green-500 rounded bg-green-500/10">
          {message}
        </div>
      )}
      {error && (
        <div className="p-2 mb-4 text-sm text-red-500 rounded bg-red-500/10">
          {error}
        </div>
      )}
      <div className="flex items-start">
        <Image
          src={userImage as StaticImageData}
          alt="Logo X Clone"
          width={40}
          height={40}
          className="rounded-full"
        />
        <form className="flex-1 ml-3" onSubmit={onSubmit}>
          <div
            className={`mb-2 ${
              showOptions ? "border-b border-border_color" : "border-none"
            }`}
          >
            <textarea
              onClick={showOption}
              rows={1}
              maxLength={1300}
              placeholder="¡¿Qué está pasando?!"
              {...register("content", { required: true })}
              onInput={(e: React.FormEvent<HTMLTextAreaElement>) => {
                const target = e.currentTarget;
                target.style.height = "auto";
                target.style.height = `${Math.min(target.scrollHeight, 696)}px`;
              }}
              className="py-3 px-2 w-full resize-none overflow-y-auto outline-none bg-transparent placeholder:text-[#e7e9ea]/50 text-xl font-light"
            />
            <button
              type="button"
              className={`mb-3 items-center font-medium gap-1 text-sm text-blue-400 transition hover:bg-blue-500/10 py-0.5 px-2 rounded-full ${
                showOptions ? "inline-flex" : "hidden"
              }`}
            >
              <WorldIcon /> Cualquier persona puede responder
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {icons.map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="p-2 rounded-full hover:bg-blue-500/10"
                >
                  <Icon className="text-blue-400 size-[18px]" />
                </button>
              ))}
            </div>
            <div>
              <button
                type="submit"
                disabled={!isContentValid(content) || isSubmitting}
                className={`px-4 py-1.5 font-bold rounded-full transition-colors ${
                  !isContentValid(content) || isSubmitting
                    ? "bg-blue-400/50 text-white/50 cursor-not-allowed"
                    : "bg-blue-400 text-white hover:bg-blue-500"
                }`}
              >
                {isSubmitting ? "Enviando..." : "Postear"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendPostComponent;

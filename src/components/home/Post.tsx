import axios from "axios";
import { useEffect, useState } from "react";
import useNotFound from "@/images/usernotfound.webp";
import Image from "next/image";

interface Tweet {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
    username: string;
    verified: boolean;
    avatar: string;
  } | null;
}

function PostComponent() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/posts");
        setTweets(response.data.tweets);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setError(error.response.data.error);
        } else {
          setError("Ocurrió un error desconocido al cargar los tweets.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  return (
    <div className="h-[795px] overflow-y-auto no-scrollbar">
      {loading ? (
        <p className="p-5 text-blue-500">Cargando tweets...</p>
      ) : (
        <div>
          {error && <p className="p-5 text-red-500">{error}</p>}
          {tweets.length === 0 ? (
            <p className="p-5 text-white/50">No hay tweets disponibles.</p>
          ) : (
            tweets.map((tweet) => (
              <div
                key={tweet.id}
                className="flex items-start gap-2 p-5 border-b border-border_color"
              >
                {tweet.user?.avatar ? (
                  <Image
                    src={tweet.user?.avatar}
                    alt="Logo X Clone"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <Image
                    src={useNotFound}
                    alt="Logo X Clone"
                    width={35}
                    height={35}
                    className="border rounded-full"
                  />
                )}
                <div>
                  <span
                    onTouchMove={() => console.log("Pasito")}
                    className="text-[15px] font-bold"
                  >
                    {tweet.user?.username || "Usuario desconocido"}
                  </span>
                  <p className="text-[15px] font-light break-all">
                    {tweet.content}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default PostComponent;

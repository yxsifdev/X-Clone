import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      throw new Error("No se encontró la sesión del usuario.");
    }

    const findTweets = await db.tweet.findMany({
      include: {
        user: true,
      },
    });

    if (!findTweets || findTweets.length === 0) {
      throw new Error("No se encontraron publicaciones.");
    }

    return NextResponse.json({ tweets: findTweets });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    } else {
      return NextResponse.json({ error: "Ocurrió un error desconocido." });
    }
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log(data);

    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      throw new Error("No se encontró la sesión del usuario.");
    }

    const findUser = await db.user.findFirst({
      where: {
        email: session.user.email,
      },
    });

    if (!findUser) throw new Error("No se ha encontrado al usuario.");

    const sendPost = await db.tweet.create({
      data: {
        content: data.content,
        userId: findUser.id,
      },
    });
    console.log(sendPost);

    return NextResponse.json("Publicación enviada");
  } catch (error) {
    return NextResponse.json({ error });
  }
}

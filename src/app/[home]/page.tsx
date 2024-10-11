"use client";

import SendPostComponent from "@/components/home/SendPost";
import PostsSectionComponent from "@/components/home/PostsSection";
import PostComponent from "@/components/home/Post";

function HomePage() {
  return (
    <>
      <PostsSectionComponent />
      <SendPostComponent />
      <PostComponent />
    </>
  );
}

export default HomePage;

import React, { useState } from "react";

function PostsSectionComponent() {
  const [activeTab, setActiveTab] = useState<"parati" | "following">("parati");
  return (
    <div>
      <div className="flex items-start border-b border-border_color">
        <button
          onClick={() => setActiveTab("parati")}
          className={`flex flex-col items-center justify-center flex-1 gap-3 px-6 pt-4 text-center transition hover:bg-white/20`}
        >
          <span
            className={`${
              activeTab === "parati"
                ? "opacity-100 font-semibold"
                : "opacity-50"
            }`}
          >
            Para ti
          </span>
          <div
            className={`w-[55px] h-[4px] bg-blue-400 rounded-full transition-opacity duration-300 ${
              activeTab === "parati" ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </button>
        <button
          onClick={() => setActiveTab("following")}
          className="flex flex-col items-center justify-center flex-1 gap-3 px-6 pt-4 text-center transition hover:bg-white/20"
        >
          <span
            className={`${
              activeTab === "following"
                ? "opacity-100 font-semibold"
                : "opacity-50"
            }`}
          >
            Siguiendo
          </span>
          <div
            className={`w-[80px] h-[4px] bg-blue-400 rounded-full transition-opacity duration-300 ${
              activeTab === "following" ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </button>
      </div>
    </div>
  );
}

export default PostsSectionComponent;

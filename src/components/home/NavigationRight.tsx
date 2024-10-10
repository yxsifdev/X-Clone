import React from "react";

function NavigationRight() {
  return (
    <>
      <div className="hidden h-screen px-5 py-3 space-y-5 overflow-x-hidden overflow-y-auto border-l lg:block border-border_color">
        <div className="flex flex-col">
          <input
            type="text"
            name=""
            id=""
            placeholder="Buscar"
            className="px-4 py-2 rounded-full bg-[#202327] placeholder:text-[#e7e9ea]/30 font-light"
          />
        </div>
      </div>
    </>
  );
}

export default NavigationRight;

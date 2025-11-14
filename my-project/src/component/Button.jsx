import React from "react";

const ButtonGroup = () => {
  const buttons = ["Done", "Done", "Done"]; // 3 buttons (same text)

  return (
    <div className="flex flex-col font-montserrat gap-[20px] mt-[20px] ml-[20px]">
      {buttons.map((label, index) => (
        <button
          key={index}
          className="
            w-[340px]
            h-[40px]
            bg-[#FFCE22]
            hover:bg-[#FFD84D]
            text-[#1F2128]
            rounded-[4px]
            font-medium
            flex
            items-center
            justify-center
            px-[20px]
            py-[10px]
          "
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;

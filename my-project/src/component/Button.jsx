import React from "react";

const ButtonGroup = () => {
  return (
    <div className="flex flex-col   font-montserrat gap-[10px] mt-[20px] ml-[20px]  ">

      {/* Button 1 */}
      <button
        className="
          w-[340px] 
          h-[40px] 
          bg-[#FFCE22] 
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
        Done
      </button>

      {/* Button 2 */}
      <button
        className="
          w-[340px] 
          h-[40px] 
          bg-[#FFCE22] 
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
        Done
      </button>

      {/* Button 3 */}
      <button
        className="
          w-[340px] 
          h-[40px] 
          bg-[#FFCE22] 
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
        Done
      </button>

    </div>
  );
};

export default ButtonGroup;

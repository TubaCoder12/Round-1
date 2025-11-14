import React, { useState } from "react";

const CheckboxColumn = () => {
  const [checks, setChecks] = useState([
    false, true, true, true, true, false, false, false, false
  ]);

  const toggle = (index) => {
    setChecks((prev) =>
      prev.map((v, i) => (i === index ? !v : v))
    );
  };

  const Tick = ({ color }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div className="w-[60px] h-[600px] bg-[#E5E5E5] flex flex-col items-center py-4 gap-4">

      {checks.map((checked, index) => (
        <button
          key={index}
          onClick={() => toggle(index)}
          className="
            flex items-center justify-center  
            rounded-[6px]
            cursor-pointer 
            transition-all duration-200
          "
          style={{
            width: "25px",
            height: "25px",
            backgroundColor: checked ? "#1E6BFF" : "white",
            border: checked ? "none" : "1px solid #BDBDBD",
            opacity: checked ? 1 : 0.6,
          }}
        >
          {checked && <Tick color="white" />}
        </button>
      ))}

    </div>
  );
};

export default CheckboxColumn;

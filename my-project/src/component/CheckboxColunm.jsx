import React, { useState } from "react";

const CheckboxColunm = () => {
  // 10 checkboxes ka default state (false = empty, true = checked)
  const [checks, setChecks] = useState([
    false, true, true, true, true, false, false, false, false
  ]);

  // toggle function
  const toggle = (index) => {
    setChecks((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  // BLUE CHECK SVG
  const BlueTick = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  // GRAY CHECK SVG
  const GrayTick = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BDBDBD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <div className="w-[60px] h-[600px] bg-[#E5E5E5] flex flex-col items-center justify-start py-4 gap-4">

      {checks.map((isChecked, index) => (
        <div
          key={index}
          onClick={() => toggle(index)} // ← CLICK YAHAN SE HO RHA HAI
          className="
            w-6 h-6 rounded flex items-center justify-center cursor-pointer
            transition-all duration-200
          "
          style={{
            background: isChecked ? "#1E6BFF" : "white",
            border: isChecked ? "none" : "1px solid #BDBDBD",
           
          }}
        >
          {isChecked ? BlueTick : null}
        </div>
      ))}
    </div>
  );
};

export default CheckboxColunm;

import { useState } from "react";

export default function AllPagesChecklist() {
  const [items, setItems] = useState([
    { id: 1, checked: false },
    { id: 2, checked: true },
    { id: 3, checked: true },
    { id: 4, checked: false },
    { id: 5, checked: true },
    { id: 6, checked: false },
  ]);

  const allChecked = items.every((i) => i.checked);

  const toggleAll = () => {
    const newValue = !allChecked;
    setItems(items.map((i) => ({ ...i, checked: newValue })));
  };

  const toggleOne = (id) => {
    setItems(
      items.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i))
    );
  };

  return (
    <div className=" mx-auto p-4 space-y-4  ">

      {/* TOP ROW */}
    

      {/* LIST ROWS */}
      {items.map((item) => (
        <div
          key={item.id}
          className="
            w-[370px]
            h-[42px]
            flex 
            items-center 
            justify-between 
            pt-[8px] 
            pr-[15px] 
            pb-[8px] 
            pl-[22px]
            bg-[#FFFFFF]
           
          "
        >
          <span className="text-[#1F2128] text-[14px] font-[400] ">All pages</span>
          <input
  type="checkbox"
  checked={item.checked}
  onChange={() => toggleOne(item.id)}
  className="
    appearance-none
    w-[23px] h-[23px]
    rounded-[6px]
    cursor-pointer
    transition duration-200
    border
  "
  style={{
    backgroundColor: item.checked ? "#1E6BFF" : "white",
    opacity: item.checked ? 1 : 0.6,
    borderColor: "#BDBDBD",
    borderWidth: item.checked ? "0px" : "1px",
    backgroundImage: item.checked
      ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' stroke='white' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12' /%3E%3C/svg%3E\")"
      : "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
/>

        </div>
      ))}
    </div>
  );
}

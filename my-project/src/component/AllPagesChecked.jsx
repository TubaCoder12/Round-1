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
      <div
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
          border 
        
          shadow-sm 
          opacity-100
        "
      >
        <span className="text-gray-700">All pages</span>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={toggleAll}
          className="w-[23px] h-[23px] rounded-[6px] opacity-100"
        />
      </div>

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
            border 
          
            shadow-sm 
            opacity-100
          "
        >
          <span className="text-gray-700">All pages</span>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => toggleOne(item.id)}
            className="w-[23px] h-[23px] rounded-[6px] opacity-100"
          />
        </div>
      ))}
    </div>
  );
}

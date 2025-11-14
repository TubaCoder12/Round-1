import { useState } from "react";

export default function PageSelector() {
  const pages = ["Page 1", "Page 2", "Page 3", "Page 4"];

  const [allSelected, setAllSelected] = useState(false);
  const [selectedPages, setSelectedPages] = useState([]);

  const toggleAll = () => {
    setAllSelected(!allSelected);
    setSelectedPages(!allSelected ? [...pages] : []);
  };

  const togglePage = (page) => {
    const updated = selectedPages.includes(page)
      ? selectedPages.filter((p) => p !== page)
      : [...selectedPages, page];

    setSelectedPages(updated);
    setAllSelected(updated.length === pages.length);
  };

  return (
    <div
      className="w-[370px] h-[326px] bg-white rounded-[6px] border border-purple-300 p-[10px] flex flex-col justify-between shadow-md"
      style={{ overflow: "hidden" }}
    >
      {/* Top + Pages */}
      <div className="overflow-y-auto">
        {/* All Pages */}
        <div className="flex justify-between items-center pt-[8px] pr-[15px] pb-[8px] pl-[22px] bg-white rounded-lg mb-2 border-b">
          <span className="text-gray-700 font-medium">All pages</span>
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
            className="w-[23px] h-[23px] rounded-[6px] opacity-100"
          />
        </div>

        {/* Single Pages */}
        {pages.map((page) => (
          <div
            key={page}
            className="flex justify-between items-center pt-[8px] pr-[15px] pb-[8px] pl-[22px] bg-white rounded-lg mb-2"
          >
            <span className="text-gray-700">{page}</span>
           <input
  type="checkbox"
  checked={selectedPages.includes(page)} // or allSelected
  onChange={() => togglePage(page)}     // or toggleAll
  className="w-[23px] h-[23px] rounded-[6px] opacity-100 relative top-[6.5px] left-[6px]"
/>

          </div>
        ))}
      </div>

      {/* Done Button with top line */}
      <div className="border-t p-6 ">
        <button className="w-full bg-yellow-400 hover:bg-yellow-500  text-gray-900 font-medium py-3 rounded-lg transition">
          Done
        </button>
      </div>
    </div>
  );
}

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
    <div className="bg-[#FFFFFF] w-[578px] h-[794px]">
      <div
        className="w-[370px] h-[326px] mx-auto mt-[85px] bg-white rounded-[6px] border pt-[10px] pb-[10px] flex flex-col shadow-md"
        style={{ overflow: "hidden" }}
      >
        {/* Top + Pages */}
        <div>
          {/* All Pages */}
          <div className="flex justify-between items-center pt-[8px] pr-[15px] pb-[8px] pl-[22px] bg-white rounded-lg">
            <span className="text-[#1F2128] font-[400] text-[14px]">
              All pages
            </span>

            <div
              onClick={toggleAll}
              className={`w-[23px] h-[23px] rounded-[6px] cursor-pointer flex items-center justify-center border ${
                allSelected
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white border-gray-300"
              }`}
            >
              {allSelected && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
          </div>

          {/* Line under All Pages */}
          <div className="border-b border-[0.7px] border-[#CDCDCD] mx-[15px] my-0 mb-[8px]"></div>

          {/* Single Pages */}
          {pages.map((page, index) => {
            const isChecked = selectedPages.includes(page);
            return (
              <div
                key={page}
                className={`flex justify-between items-center pt-[8px] pr-[15px] pb-[8px] pl-[22px] bg-white rounded-lg ${
                  index === pages.length - 1 ? "mb-0 pb-[4px]" : ""
                }`}
              >
                <span className="text-[#1F2128] font-[400] text-[14px]">
                  {page}
                </span>

                <div className="border-b border-[0.7px] border-[#CDCDCD] mx-[15px] my-0"></div>

                <div
                  onClick={() => togglePage(page)}
                  className={`w-[23px] h-[23px] rounded-[6px] cursor-pointer flex items-center justify-center border ${
                    isChecked
                      ? "bg-blue-500 border-blue-500"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {isChecked && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Done Button with border-t */}
        <div className="mt-[20px]">
          <div className="border-t border-[0.7px] border-[#CDCDCD] mx-[15px] mt-[10px] mb-[4px]" />
          <button className="ml-[15px] mt-[20px] w-[340px] h-[40px] bg-[#FFCE22] text-[#1F2128] rounded-[4px] font-medium flex items-center justify-center">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

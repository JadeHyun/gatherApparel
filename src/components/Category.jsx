import React, { useEffect, useState } from "react";

export default function Category({ categoryList, setCurrentList, dummyData }) {
  const [haveCategory, setHaveCategory] = useState();

  function filterList(list, category) {
    return list.filter((items) => items.type === category);
  }

  useEffect(() => {
    haveCategory && setCurrentList(filterList(dummyData, haveCategory));
  }, [haveCategory, setCurrentList]);

  return (
    <div className="flex flex-wrap justify-start items-center">
      Category:
      {categoryList.map((item, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setHaveCategory(item)}
            className={
              haveCategory === item
                ? "m-2 px-3 py-1 rounded-lg bg-gray-600 text-white"
                : "m-2 px-3 py-1 rounded-lg bg-gray-200"
            }
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

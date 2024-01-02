import React from "react";

export default function CategorSelection({ onSelectCategory, activeCategory }) {
  const categories = ["StartUps", "Security", "AI", "Apps", "Tech"];
console.log(activeCategory);
  return (
    <div className="px-4 mb-8 lg:space-x-8 flex flex-wrap items-center border-b-2 py-5 text-gray-900">
      <button
        onClick={() => onSelectCategory(null)}
        className={`lg:ml-12 ${activeCategory ? "" : "active-buton"}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => onSelectCategory(category)}
          className={`mr-2 space-x-16 ${
            activeCategory === category ? "active-button" : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

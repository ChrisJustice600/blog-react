import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorSelection from "./CategorSelection";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12; // blogs par page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
      // filtrage par categorie
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  // page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      {/* category section */}
      <div>
        <CategorSelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {/* BlogCard section */}
      <div>
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />
      </div>

      {/* pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}
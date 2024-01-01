import React from "react";

export default function Pagination({
  onPageChange,
  currentPage,
  blogs,
  pageSize,
}) {
 // Vérifiez si blogs et blogs.default existent et si blogs.default est un tableau
 const blogsDefaultArray = Array.isArray(blogs?.default) ? blogs.default : [];

 // Maintenant, vous pouvez accéder à la propriété length
 
 const blogsLength = blogsDefaultArray.length;
 const totalPages = Math.ceil(blogsLength / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activerPagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };
  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      <div className="flex gap-1">{renderPaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
}

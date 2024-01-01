import React from "react";
import BlogPage from "../components/BlogPage"

export default function Blogs() {
  return (
    <>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">Blog page</h2>
      </div>
      {/* All bblogs container */}
      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </>
  );
}

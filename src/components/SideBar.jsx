import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    // Utilisez fetch comme promesse
    // async function fetchBlogs() {
    //   let url = `http://localhost:5000/blogs`;

    //   const response = await fetch(url);
    //   const data = await response.json();
    //   const dataArrow = data.default
    //   setPopularBlogs(dataArrow.slice(0, 15));
    // }

    // fetchBlogs();

    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())  // Résoudre la promesse avec res.json()
      .then((data) => {
        console.log("donnée venant du serveur", data);
        setPopularBlogs(data.default.slice(0, 15))})
      .catch((error) => console.error("Erreur lors de la récupération des données:", error));
  }, []);
  console.log(popularBlogs);

  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center">
                Read more <FaArrowRight className="mt-1 ml-2 " />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(5, 10).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2 cursor-pointer">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center">
                Read more <FaArrowRight className="mt-1 ml-2 " />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

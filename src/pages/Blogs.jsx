import React from "react";
import { useNavigate } from "react-router-dom";
import { useBlogStore } from "../Store/BlogStore";

function Blogs() {
    const { setBlog,blogs } = useBlogStore();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white w-full p-3 flex flex-col gap-3 overflow-y-scroll">
      {blogs.map((blog, index) => {
        return (
          <div
            onClick={() => {
              setBlog(blog)
              navigate(`/blogs/${index}`);
            }}
            key={index}
            className="w-full bg-black text-white p-2 rounded-md shadow-md"
          >
            <h1 className="font-bold text-2xl p-3">{blog.title}</h1>
            <div className="p-5">
              <img className="rounded-xl" src={blog.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;

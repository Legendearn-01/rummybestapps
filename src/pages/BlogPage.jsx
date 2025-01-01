import { useEffect } from "react";
import { useBlogStore } from "../Store/BlogStore";
import { useParams } from "react-router-dom";

function BlogPage() {
  const { blogs } = useBlogStore();
  const { id } = useParams();

  useEffect(() => {
    console.log(blogs);
  }, []);

  return (
    <div className="min-h-screen bg-white w-full p-3 flex flex-col gap-3 overflow-y-scroll">
      <h1 className="text-black font-bold text-3xl">{blogs[id]?.title}</h1>
      <h1>{blogs[id]?.description}</h1>
      {blogs[id]?.sub?.map((subBlog, index) => {
        return (
          <div>
            <h1 className="font-bold text-2xl ">{subBlog.subHead}</h1>
            <h1>{subBlog.subDescription}</h1>
          </div>
        );
      })}
      <div className="p-2">
        <img className="rounded-xl" src={blogs[id]?.image} alt="" />
      </div>
    </div>
  );
}

export default BlogPage;

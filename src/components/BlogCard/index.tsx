import React from "react";
import { BlogCardProps } from "@/components/BlogCard/BlogCardProps";

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  body,
  src,
  date,
  author,
}) => {
  return (
    <div className={"w-[300px]"}>
      <img src={src} alt="ourBlog1" />
      <div className={"bg-primary px-5 py-6 flex flex-col gap-2"}>
        <div className={"flex items-center justify-between"}>
          <span className={"text-xs text-otherSecond font-bold"}>{date}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="2"
            viewBox="0 0 20 2"
            fill="none"
          >
            <line
              x1="0.213867"
              y1="1"
              x2="20"
              y2="1"
              stroke="#272D32"
              stroke-width="2"
            />
          </svg>
          <span className={"text-xs text-otherSecond font-bold"}>{author}</span>
        </div>
        <div className={"text-xl font-bold font-playfair"}>{title}</div>
        <div className={"text-text"}>{body}</div>
      </div>
    </div>
  );
};

export default BlogCard;

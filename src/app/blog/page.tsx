"use client";

import { Suspense } from "react";

import BlogList from "~/components/BlogLists";

const Blog = () => {
  return (
    <div className="overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <BlogList />
      </Suspense>
    </div>
  );
};

export default Blog;

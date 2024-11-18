import React from "react";

const BlogPage = () => {
  return (
    <div>
      <header>
        <h1>Blog Page</h1>
      </header>
      <main>
        <article>
          <h2>Blog Post Title</h2>
          <p>Blog post content goes here...</p>
        </article>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Personal Website</p>
      </footer>
    </div>
  );
};

export default BlogPage;

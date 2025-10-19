// import React from 'react'
import { useState } from "preact/hooks";

const PostsList = ({ postsLatest, postsOldest }) => {
  const [posts, setPosts] = useState(postsLatest);
  const [active, setActive] = useState("latest");

  return (
    <>
      <section className="sorting-section">
        <p>Sort by:</p>
        <div className="sort-btns-container">
          <button
            className={`sort ${active === "latest" ? "active" : ""}`}
            onClick={() => {
              setActive("latest");
              setPosts(postsLatest);
            }}
          >
            Latest
          </button>
          <button
            className={`sort ${active === "oldest" ? "active" : ""}`}
            onClick={() => {
              setActive("oldest");
              setPosts(postsOldest);
            }}
          >
            Oldest
          </button>
        </div>
      </section>

      <section className="posts-list">
        {posts.map((post) => {
          const { title, date, tags = [] } = post.frontmatter;
          const formattedDate = date
            ? new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "";
          return (
            <article className="post-card" key={post.url}>
              <div className="post-header">
                <a href={post.url} className="post-title">
                  {title}
                </a>
                {formattedDate && (
                  <span className="post-date">{formattedDate}</span>
                )}
              </div>
              {tags.length > 0 && (
                <div className="post-tags">
                  {tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <hr className="post-separator" />
            </article>
          );
        })}
      </section>
    </>
  );
};

export default PostsList;

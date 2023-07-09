import React from 'react';

const BlogPost = ({ blogPost }) => {
  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="hero"></div>

      <section className="main">
        <h2>{blogPost.title}</h2>
        <div className="profile_container">
          <div className="profile">
            <div className="img_container"></div>
            <div className="text">
              <h3>{blogPost.author}</h3>
              <p>{blogPost.date}</p>
            </div>
          </div>
          <div className="button">
            <a href="#" className="btn">Visit Profile</a>
          </div>
        </div>

        <div className="content">
          <h4>INTRODUCTION</h4>
          <p>{blogPost.introduction}</p>

          <h4>CAUSES FOR WEAK EYESIGHT:</h4>
          <p>{blogPost.causes}</p>

          <div className="img_container"></div>
          <p>image description</p>

          <blockquote>{blogPost.quote}</blockquote>

          <h4>CONCLUSIONS</h4>
          <p>{blogPost.conclusion}</p>

          <blockquote>{blogPost.conclusionQuote}</blockquote>
        </div>

        <div className="tags">
          <p>tags:</p>
          {blogPost.tags.map((tag, index) => (
            <a href="#" key={index}>{tag}</a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

const BlogCard = ({ postName, postDate, postTitle, postImg }) => {
  return (
    <div className="blog-detail">
      <div className="blog-img">
        <img src={postImg} alt="post-img" />
      </div>
      <div>
        <div className="blog-info">
          <span>
            {postName}
          </span>
          <span>
            {postDate}
          </span>
        </div>
        <h5 className="post-title">
          {postTitle}
        </h5>
      </div>
    </div>
  )
}

export default BlogCard

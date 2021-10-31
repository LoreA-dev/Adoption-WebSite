import React from 'react'

const Blog = ({blog,setCurrentBlog}) => {
    return (
        <div className="blogItemDiv">
            <div className="titleCategory">
                <h2>{blog.category}</h2>
            </div>
            <div className="textContainer">
                <h3>{blog.title}</h3>
                <p>
                    {blog.summary}
                </p>
                <button onClick={()=>setCurrentBlog(blog.description)} className="readmoreButton">Read more...</button>
            </div>
            <img src={blog.photo} className="images" alt="Article"/>
    </div>
    )
}

export default Blog

import React,{useState} from 'react'
import './animalcare.css'
import { blogs } from '../../constants'
import Blog from '../../components/Blog'
const AnimalCareView = () => {
    const [currentBlog, setCurrentBlog] = useState(null)
    return (
        <>
            <div id="mainContainer">
                <div id="listOfBlogs">
                    { blogs.map(blog=>(
                        <Blog key={blog.id} blog={blog}  setCurrentBlog={setCurrentBlog} />
                    ))}
                </div>
                <div className="descriptionBlogContainer">
                    {currentBlog ? 
                    <div style={{height:"100%"}} dangerouslySetInnerHTML={{__html: currentBlog}}></div>
                    : 
                    <>
                        <p>You haven't selected anything yet. </p>
                        <i className="far fa-hand-pointer"></i>
                    </>
                    }
                </div>
            </div>
        </>
    )
}

export default AnimalCareView

import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"

const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
  return (
    <div>
        {
        loading?
        (<Spinner/>):
        (
            posts.length === 0 ?
            (
               <div><p>No Posts Found</p></div>
            ):
            (posts.map((post)=>(
                <div>
                    <p className='font-bold'>{post.title}</p>
                    <p>By <span>{post.author}</span>on <span>{post.category}</span></p>

                    <p>
                        Posted on 
                        <span>{post.date}</span>
                    </p>

                    <p>
                        {post.content}
                    </p>

                    <div>
                        {
                        post.tags.map((tag)=>{
                            return <span>
                                {`#${tag}`}
                            </span>
                        }
                        )}
                    </div>
                </div>
            )))
        )
        }
    </div>
  )
}

export default Blogs
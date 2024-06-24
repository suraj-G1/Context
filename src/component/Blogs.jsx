import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import "./Blogs.css"

const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-10/12 max-w-[550px] mx-auto flex items-center flex-col gap-y-6 py-2 mt-[65px] mb-[80px] justify-center h-screen '>
        {
        loading?
        (<Spinner/>):
        (
            posts.length === 0 ?
            (
               <div><p>No Posts Found</p></div>
            ):
            (posts.map((post)=>(
                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-md'>{post.title}</p>
                    <p className='text-[12px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>

                    <p className='text-[12px]'>
                        Posted on 
                        <span >{post.date}</span>
                    </p>

                    <p className='text-md'>
                        {post.content}
                    </p>

                    <div className='flex gap-x-2'>
                        {
                        post.tags.map((tag)=>{
                            return <span className='text-blue-500 underline font-bold text-[11px]'>
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
import Header from './component/Header'
import Blogs from './component/Blogs'
import Pagination from './component/Pagination'
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import "./App.css"
export default function App() {
  const{fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
  
}

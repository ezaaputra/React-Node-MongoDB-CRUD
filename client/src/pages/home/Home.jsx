import { useState, useEffect } from "react"
import axios from "axios"
import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import { useLocation } from "react-router-dom"

export default function Home() {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axiosInstance.get("/posts" + search)
        setPosts(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts()
  }, [search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

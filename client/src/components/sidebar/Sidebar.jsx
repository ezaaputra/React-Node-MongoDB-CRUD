import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats] = useState([])
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get('/categories/')
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://cdn.idntimes.com/content-images/community/2019/05/keanu-036c463ea1f3c42605f00bbf3bb432e5_600x400.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Natus tempore voluptas ullam officiis architecto obcaecati
          facilis, ut, libero optio quod repellendus quas at saepe
          cupiditate nemo aut aperiam. Blanditiis, earum.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  )
}

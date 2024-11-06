import { useContext } from "react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Lembookings</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Đăng ký</button>
            <button className="navButton">Đăng nhập</button>
          </div>)}
      </div>
    </div>
  )
}

export default Navbar
import { NavLink } from "react-router-dom"

function NavBaar() {
  return (
    <header>
        <nav>
            <div className="logo">
                <h2>Avinash</h2>
            </div>
            <div className="link">
                <ul>
                    <li><NavLink className="NavBaarLink" activeclassname="active" to="/">Home</NavLink></li>
                    <li><NavLink className="NavBaarLink" activeclassname="active" to="/about">About</NavLink></li>
                    <li><NavLink className="NavBaarLink" activeclassname="active" to="/contact">Contact</NavLink></li>
                    <li><NavLink className="NavBaarLink" activeclassname="active" to="/login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBaar
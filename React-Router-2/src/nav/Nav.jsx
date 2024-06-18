import { NavLink } from "react-router-dom"
function Nav() {
  return (
    <div className="bg-slate-700 text-white text-center">
        <NavLink  className="px-10" activeclassName="active" to="/" >HOME</NavLink>
        <NavLink  className="px-10" activeclassName="active" to="/about" >ABOUT</NavLink>
        <NavLink  className="px-10" activeclassName="active" to="/contact" >CONTACT</NavLink>
        <NavLink  className="px-10" activeclassName="active" to="/avinash" >AVINASH</NavLink>
    </div>
  )
}
export default Nav
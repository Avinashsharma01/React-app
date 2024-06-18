// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Nav() {
    let logo='Avinash'
    return(
        <>
         <div className="text-white flex justify-around bg-black  h-[60px]  items-center sticky top-0 border-b-[1px]">
            <div>
                <h1 className="text-xl"> {logo}</h1>
            </div>
            <div className="link">
                <NavLink className="px-2 text-lg"  activeClassName="active" to="/">Home</NavLink>
                <NavLink className="px-2 text-lg"  activeClassName="active" to="/about">About </NavLink>
                <NavLink className="px-2 text-lg"  activeClassName="active" to="/services">Services </NavLink>
                <NavLink className="px-2 text-lg"  activeClassName="active" to="/contact">Contact</NavLink>
            </div>
            
        </div>
        </>
    )
}
export default Nav;

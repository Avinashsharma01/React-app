/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
function Nav({logo,home,services, contact, about,darkmode,darkText}){
    return(
        <>
        <div className="text-white flex justify-around bg-black  h-[60px]  items-center sticky top-0 border-b-[1px]">
            <div>
                <h1 className="text-xl"> {logo}</h1>
            </div>
            <div className="link">
                <NavLink className="px-2 text-lg"  activeClassName="active" to="/">{home} </NavLink>
                <NavLink className="px-2 text-lg"  activeClassName="active" to="about">{about} </NavLink>
                <NavLink className="px-2 text-lg"  activeClassName="active" to="services">{services} </NavLink>
                <NavLink className="px-2 text-lg"  activeClassName="active" to="contact">{contact} </NavLink>
            </div>
            <div className="dark-mode">
                <button onClick={darkmode} className='bg-white text-black p-2 rounded-lg'>{darkText}</button>
            </div>
        </div>
        </>
    )
}


Nav.prototype={home:PropTypes.string,
                about:PropTypes.string,
                services:PropTypes.string,
                contact: PropTypes.string
}
export default Nav


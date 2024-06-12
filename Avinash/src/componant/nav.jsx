/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
function Nav({logo,home,services, contact, about,darkmode,darkText}){
    return(
        <>
        <div className="text-white flex justify-around bg-black  h-[60px]  items-center sticky top-0 ">
            <div>
                <h1 className="text-xl"> {logo}</h1>
            </div>
            <div className="link">
                <a className="px-2 text-lg"  href="">{home} </a>
                <a className="px-2 text-lg"  href="">{about} </a>
                <a className="px-2 text-lg"  href="">{services} </a>
                <a className="px-2 text-lg"  href="">{contact} </a>
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


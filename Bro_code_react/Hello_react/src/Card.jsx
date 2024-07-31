/* eslint-disable react/prop-types */
import proptype from "prop-types";
function Card({ name, age, course, pincode, isLogedIn }) {
    let mystyle = {
        color: "red",
    };

    if (isLogedIn) {   // this is called conditional rendaring 
        return (
            <>
                <h1 style={mystyle}>this is inline css</h1>
                <div>
                    <p>Name:- {name}</p>
                    <p>Age:- {age}</p>
                    <p>course:- {course}</p>
                    <p>pincode:- {pincode}</p>
                </div>
            </>
        );
    }
    else{
        return <h1 style={mystyle}>First you have to log in first. </h1>
    }
}

Card.proptype = {
    name: proptype.string,
    age: proptype.number,
    course: proptype.string,
    pincode: proptype.number,
};

// Card.defaultProps = {
//     name: "hhh",
//     age: 12,
//     course: "Hello",
//     pincode: 456123,
// };
export default Card;

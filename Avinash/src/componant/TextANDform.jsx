import Nav from "./nav";
import Textform from "./textform";
import { useState } from "react";
function TextANDform() {

    const [darkText, setdarkText] = useState(" Enable Dark Mode");
    const [Mystyle, setMystyle] = useState({
        backgroundColor: "white",
        color: "black",
    });

    let dark = () => {
        console.log("first");
        if (Mystyle.color === "white") {
            setMystyle({
                backgroundColor: "white",
                color: "black",
            });
            setdarkText(" Enable Dark Mode");
        } else {
            setMystyle({
                backgroundColor: "black",
                color: "white",
            });
            setdarkText(" Enable Light Mode");
        }
    };

  return (
    <>
        <div className="main -z-10 " style={Mystyle}>
                <Nav
                    logo="Avinash Sharma"
                    about="About"
                    contact="contact"
                    services="services"
                    home="Home"
                    darkmode={dark}
                    darkText={darkText}
                />

                <div className="con sticky top-[60px] z-0 ">
                <div className="w-full h-screen flex justify-start items-center flex-col">
                    <Textform
                        heading={
                            "Type your word here and Capitalize whatever you want "
                        }
                        Hello={Mystyle}
                    />
                </div>
                </div>
            </div>
    </>
  )
}

export default TextANDform
import TextANDform from "./componant/TextANDform"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Nav-Pages/About"
import Contact from "./Nav-Pages/Contact"
import Services from "./Nav-Pages/Services"
// import Home from "./Nav-Pages/Home"
function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<TextANDform/>}></Route>
                <Route exact path="about" element={<About/>}></Route>
                <Route exact path="contact" element={<Contact/>}></Route>
                <Route exact path="services" element={<Services/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
















// // import { useState } from "react";
// // import Nav from "./componant/nav";
// // import Textform from "./componant/textform";

// import TextANDform from "./componant/TextANDform";

// function App() {
//     // const [darkText, setdarkText] = useState(" Enable Dark Mode");
//     // const [Mystyle, setMystyle] = useState({
//     //     backgroundColor: "white",
//     //     color: "black",
//     // });

//     // let dark = () => {
//     //     console.log("first");
//     //     if (Mystyle.color === "white") {
//     //         setMystyle({
//     //             backgroundColor: "white",
//     //             color: "black",
//     //         });
//     //         setdarkText(" Enable Dark Mode");
//     //     } else {
//     //         setMystyle({
//     //             backgroundColor: "black",
//     //             color: "white",
//     //         });
//     //         setdarkText(" Enable Light Mode");
//     //     }
//     // };

//     return (
//         <>
//             {/* <div className="main -z-10 " style={Mystyle}>
//                 <Nav
//                     logo="Avinash Sharma"
//                     about="About"
//                     contact="contact"
//                     services="services"
//                     home="Home"
//                     darkmode={dark}
//                     darkText={darkText}
//                 />

//                 <div className="con sticky top-[60px] z-0 ">
//                 <div className="w-full h-screen flex justify-start items-center flex-col">
//                     <Textform
//                         heading={
//                             "Type your word here and Capitalize whatever you want "
//                         }
//                         Hello={Mystyle}
//                     />
//                 </div>
//                 </div>
//             </div> */}


//             <TextANDform/>
//         </>
//     );
// }

// export default App;

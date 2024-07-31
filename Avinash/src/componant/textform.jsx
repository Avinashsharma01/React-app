/* eslint-disable react/prop-types */
import { useState } from "react";
import Count from "./Count";
function Textform({ heading ,Hello}) {
    const [Text, setText] = useState("");
    const [Color, setColor] = useState("Red");
    const [backgroundcolor, setBackgroundColor] = useState("white");
    let Uppercase = () => {
        let newUppercase = Text.toUpperCase();
        setText(newUppercase);
    };

    let Lowercase = () => {
        let newLowercase = Text.toLowerCase();
        setText(newLowercase);
    };

    let Reset = () => {
        setText("");
    };

    let Onchangehandle = (e) => {
        // console.log("Onchange");
        setText(e.target.value);
    };

    let ChangeColor = () => {
        const colors = [
            "#FF5733", // Red-Orange
            "#33FF57", // Lime Green
            "#3357FF", // Blue
            "#FF33A1", // Pink
            "#33FFF7", // Aqua
            "#A833FF", // Purple
            "#FFA833", // Orange
            "#FF5733", // Red-Orange
            "#33FF57", // Lime Green
            "#3357FF", // Blue
            "#FF33A1", // Pink
            "#33FFF7", // Aqua
            "#A833FF", // Purple
            "#FFA833", // Orange
            "#FF5733", // Red-Orange
            "#33FF57", // Lime Green
            "#3357FF", // Blue
            "#FF33A1", // Pink
            "#33FFF7", // Aqua
            "#A833FF", // Purple
            "#FFA833", // Orange
            "#FF5733", // Red-Orange
            "#33FF57", // Lime Green
            "#3357FF", // Blue
            "#FF33A1", // Pink
            "#33FFF7", // Aqua
            "#A833FF", // Purple
            "#FFA833", // Orange
            "#FF5733", // Red-Orange
            "#33FF57"  // Lime Green
          ];
          
          console.log(colors);
          
        let randomindex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomindex];
        setColor(randomColor);
    };

    let ChangeBackgroundColor = () => {
        let backgroundColors = [
            // "red",
            // "green",
            // "blue",
            // "yellow",
            // "gray",
            // "purple",
            // "orange",
            // "pink",
            // "cyan",
            // "black",
            "#1B2631", // Deep Blue-Grey
            "#4A235A", // Deep Purple
            "#154360", // Dark Blue
            "#641E16", // Dark Red
            "#0B5345", // Deep Teal
            "#512E5F", // Dark Purple
            "#1C2833", // Very Dark Blue-Grey
            "#4D5656", // Deep Grey
            "#4A235A", // Deep Violet
            "#1B4F72"  // Deep Blue
        ];
        let bgcIndex = Math.floor(Math.random() * backgroundColors.length);
        let bgcColor = backgroundColors[bgcIndex];
        setBackgroundColor(bgcColor);
    };

    // i have to work here

    let CopyText=()=>{
        let text=document.querySelector("#allText")
        text.select()
        navigator.clipboard.writeText(text.value)
    }


    let RemoveExtraSpace=()=>{
        let NewSpace=Text.split(/[ ]+/)
        setText(NewSpace.join(" "))
    }

    return (
        <>
            <div className="container1 mt-[60px] bg-slate-500  flex flex-col h-auto  p-2 rounded-md">
                <h1 className="text-2xl mb-2  uppercase">{heading}</h1>
                <textarea
                    name=""
                    id="allText"
                    rows={10}
                    cols={162}
                    value={Text}
                    className="text-black px-3 rounded-md"
                    onChange={Onchangehandle}
                    style={{ color: Color, backgroundColor: backgroundcolor }}
                ></textarea>
                <div className="allbtn p-4">
                    <Count Text={Text} />

                    <button
                        onClick={Reset}
                        className="w-auto bg-red-600 text-white p-2 px-5 rounded-lg mr-4"
                    >
                        Reset
                    </button>
                    <button
                        onClick={Uppercase}
                        className="w-auto bg-blue-600 text-white p-2 px-5 rounded-lg mr-4"
                    >
                        Uppercase
                    </button>

                    <button
                        onClick={Lowercase}
                        className="w-auto bg-green-600 text-white p-2 px-5 rounded-lg mr-4"
                    >
                        Lowercase
                    </button>
                    <button
                        onClick={CopyText}
                        className="w-auto bg-emerald-800 text-white p-2 px-5 rounded-lg mr-4"
                    >
                        Copy
                    </button>
                    <button
                        onClick={RemoveExtraSpace}
                        className="w-auto bg-fuchsia-800 text-white p-2 px-5 rounded-lg mr-4"
                    >
                        Remove Extra space
                    </button>
                    <button
                        onClick={ChangeColor}
                        className="w-auto bg-purple-800 text-white p-2 px-5 rounded-lg mr-4"
                    >
                        Change text Color
                    </button>
                    <button
                        onClick={ChangeBackgroundColor}
                        className="w-auto bg-yellow-600 text-white p-2 px-5 rounded-lg mr-4"
                    >
                        Change Background Color
                    </button>
                </div>
            </div>

            <div className="preview px-20 text-red-600 h-auto overflow-y-scroll" style={Hello}>
                <p>{Text}</p>
            </div>
        </>
    );
}

export default Textform;

import { useState } from "react";
function AddList() {
    const [food, setlist] = useState(["Apple", "Mango", "Orange"]);

    let Additems = () => {
        let inputValue = document.querySelector("#thisValue").value;
        document.querySelector("#thisValue").value=""
        setlist([...food, inputValue]);

    };
    return (
        <div className="Addlist">
            <h1>Add item </h1>
            <input className="helloinput" type="text" id="thisValue" />
            <button onClick={Additems} className="Addbtn">
                Additem
            </button>
            <ol>
                {food.map((item, index) => (
                    <li className="helloLI" key={index}>
                        {item}
                    </li>
                ))}
            </ol>
        </div>
    );
}
export default AddList;

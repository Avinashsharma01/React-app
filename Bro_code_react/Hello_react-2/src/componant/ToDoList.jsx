import { useState } from "react";
function ToDoList() {

    const [task, setTask] = useState("Avinash",'Sharma');
    let HandleOnChange = (e) => {
        setTask(e.target.value);
    };

    let AddTask = () => {};

    return (
        <div>
            <h1 className="text-2xl">To-Do-List App</h1>
            <div>
                <input
                    type="text"
                    onChange={HandleOnChange}
                    name=""
                    id=""
                   
                    className="w-72 h-10 text-black px-2 outline-none"
                />
                <button onClick={AddTask} className="bg-blue-700 mx-2 p-2">
                    Add
                </button>
            </div>
            

        </div>
    );
}

export default ToDoList;

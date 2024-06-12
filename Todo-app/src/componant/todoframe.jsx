import Appname from "./Appname"
import TodoAdd from "./Todo-add"
import Items from "./items"

function Todoframe(){
    return(
        <>
                <div className=" w-[550px] h-[350px] bg-teal-800 flex flex-col p-5 ">
                   <Appname/>
                   <TodoAdd/>
                   <Items/>
                </div>
        </>
    )
}
export default Todoframe
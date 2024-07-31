import {useState} from "react"
function HandleInput() {
    const [Text, setText]=useState("Avinash")

    let HandleOnchange=(e)=>{
        setText(e.target.value)
    }

    return (
    <div className="in">
        <input type="text" name="" id=""  onChange={HandleOnchange} />
        <p>Name:{Text} </p>
    </div>
  )
}

export default HandleInput
import { useState } from "react"
function ColorPicker() {

    const [color, setColor]=useState("#25984d")


    let OnchangeColor=(e)=>{
        setColor(e.target.value)
    }
  
  return (
    <div className="color">
        <h1>Color Picker</h1>
        <h2  style={{color: color}}>Color:- {color}</h2>
        <input className="inputfield" value={color} onChange={OnchangeColor} type="color" name="" id="" />
    </div>
  )
}

export default ColorPicker
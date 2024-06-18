import { useState } from "react"
function App(){
  
  const [hello, setHello]=useState(0)
  return(
    <>
      <h1>Hello World {hello} </h1>
    </>
  )
}

export default App
function Btn() {

    let onClickHandle=(e)=>{
        console.log("first")
        console.log(e)
        e.target.style.display="none"
    }

  return (
    <button onClick={(e)=>{
        onClickHandle(e)
    }} >Click me </button>
  )
}

export default Btn
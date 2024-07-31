/* eslint-disable react/prop-types */
import Card from "./Card"
import Nav from "./Nav"
import AddList from "./componant/AddList"
import Btn from "./componant/Btn"
import ColorPicker from "./componant/ColorPicker"
import HandleInput from "./componant/HandleInput"
import Lists from "./componant/Lists"
function App({children}) {

let arr=['Brijesh Sharma', 19, "B-tech CSE", 841426]

  return (
    <>
      <Nav/>
      <div>{children}</div>
      <div>
      <Card  isLogedIn={true} name='Avinash Sharma' age='{20} 'course="B - tech it"  pincode={841426} />
      <Card  isLogedIn={true} name={arr[0]} age={arr[1]} course={arr[2]}  pincode={arr[3]} />
      <Card  isLogedIn={true} name='Ankrita Sharma' age={20} course="B - tech it"  pincode={841426} />
      <Card  isLogedIn={true} name='Amaresh Sharma' age={20} course="B - tech it"  pincode={841426} />
      <Card  isLogedIn={true} />
      </div>
      <hr />
      <hr />
      <hr />
      <hr />
      <Lists/>
      <Btn/>
      <HandleInput/>
      <ColorPicker/>
      <AddList/>
    </>
  )
}

export default App
/* eslint-disable react/prop-types */
import Nav from "./componant/Nav"
function App({children}) {
  return (
    <>
     <Nav/>
     <div>{children}</div>
    </>
  )
}

export default App
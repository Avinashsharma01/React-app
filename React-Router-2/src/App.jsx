/* eslint-disable react/prop-types */
import Nav from "./nav/Nav"
function App({children}){
    return(
      <>
        <Nav></Nav>
        <div>{children}</div>
      </>
    )
}
export default App
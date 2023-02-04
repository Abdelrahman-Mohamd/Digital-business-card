import UpperDiv from "./components/UpperDiv"
import LowerDiv from "./components/LowerDiv"
import Footer from "./components/Footer"
import React from "react"

function App(){
    return(
        <div className="card">
            <UpperDiv/>
            <LowerDiv/>
            <Footer/>
        </div>
    )
}
export default App;
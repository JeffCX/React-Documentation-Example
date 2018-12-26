import React from "react"
import ReactDOM from "react-dom"

const tick = () =>{
    const element = (
        <h1>
            Time is {new Date().toLocaleTimeString()}.
        </h1>
    )
    ReactDOM.render(element,document.getElementById("root"))
}


export default tick



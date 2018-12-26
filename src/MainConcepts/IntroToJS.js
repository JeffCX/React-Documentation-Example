import React from "react"

const firstName = "Jeff"
const lastName = "Cui"

const RenderUser = (firstName,lastName) =>{
    return `${firstName} , ${lastName}`
}

class App extends React.Component{
    render(){
        return <div>
                Hello {RenderUser(firstName,lastName)}
              </div>
    }
}

export default App



import React from "react"

//func's take props and pass to the functional component 

const Func = (props) =>{
    return <h1>
                {props.title}
            </h1>
}

class App extends React.Component{
    render(){
        return <div>
                <Func title = "Functional component vs class Component " />
              </div>
    }
}


export default App



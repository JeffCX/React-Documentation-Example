import React from "react"

class Clock extends React.Component{
    constructor(props){
        //use props 
        super(props)
        this.state = {
            time: new Date()
        }
    }

    //when component is loaded,set up the timer
    componentDidMount(){
        this.timer = setInterval(
            ()=>{
                this.setState(
                    {
                        time:new Date()
                    }
                )
            },
            1000)
    }

    //when component is removed, clear the timer
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return <div>
                <h1>
                    {this.state.time.toLocaleTimeString()}
                </h1>
              </div>
    }
}

export default Clock



import React from "react"

class Form extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
        this.file = React.createRef()
    }

    handleSubmit(event){
        event.preventDefault()
        alert(this.input.current.value)
        alert(this.file.current.files)
        this.input.current.value = ""
    }

    render(){
        return <form onSubmit={this.handleSubmit}>
            <input type='text' ref={this.input} defaultValue="gan"/>
            <input type='file' ref={this.file} />
            <button type='text'>Submit</button>

            
        </form>
    }
}


export default Form
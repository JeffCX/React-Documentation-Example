import React from "react"

class Draggble extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            imageName:""
        }
        this.handleFile = this.handleFile.bind(this)
    }

    handleFile(event){
        event.preventDefault()
        const fileType = event.dataTransfer.files[0].type
        if(fileType.includes("image")){
           this.setState({
               imageName:`${fileType}`
            })
        }else{
            this.setState({
                imageName:""
            })
        }
    }

    render(){
        return <div>
                <div style={{
                    border:"2px dotted purple",
                    width:"5rem",
                    padding:"3rem"
                }} 

                onDragOver= {(e)=>{e.preventDefault()}}
                onDragEnd = {(e)=>{e.preventDefault()}}
                onDragLeave = {(e)=>{e.preventDefault()}}
                onDrop = {this.handleFile}
                >
                Drag a image here
                </div>

                {this.state.imageName===""?
                    <div>No Image selected</div>
                    :
                    this.state.imageName}
              </div>

             
    }
}

export default Draggble



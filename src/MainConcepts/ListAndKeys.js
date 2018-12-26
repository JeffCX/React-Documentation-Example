import React from "react"
import uuid from "uuid"

const ButtonRemove = (props) =>{
    return <button onClick={props.remove}>
             {props.content}
        </button>
}

//ADD, REMOVE, EDIT
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task:"",
            toDoList:[],
            editing:""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleEdittingChange = this.handleEdittingChange.bind(this)
        this.handleRemove=this.handleRemove.bind(this)
 
    }

    handleInputChange(e){
        this.setState({
            task:e.target.value
        })
    }

    handleEdittingChange(e){
        this.setState({
            editing:{
                task:e.target.value,
                id:this.state.editing.id
            }
        })
    }

    handleEdit(){

    }
    
    handleAdd(e){
        e.preventDefault()
        let task = {
            task:this.state.task,
            id:uuid()
        }

        this.setState((prevState)=>{
            return {
                task:"",
                toDoList:prevState.toDoList.concat(task)
            }
        })
    }

    handleRemove = (id) =>{
        return ()=>{
            this.setState((prevState)=>{
                return {
                    toDoList:prevState.toDoList.filter((data)=>{
                        return data.id!==id
                    })
                }
            })
        }
    }

    //filter, if return false, item is removed
    render(){
        return <div>
                <input type='text'onChange={this.handleInputChange}  value={this.state.task}/>
                <button onClick={this.handleAdd} disabled={this.state.task===""}>Add</button>
                {
                    this.state.toDoList.map((task)=>{
                        return <div key = {task.id}>

                     
                        
                         { this.state.editing.id!==task.id?task.task:
                            <input value={this.state.editing.task} 
                            onChange={this.handleEdittingChange}
                        />
                        }
                 

                            <ButtonRemove remove={this.handleRemove(task.id)} content="Remove"/>
                            
                          

                            {this.state.editing.id!==task.id?<button onClick={()=>{
                            
                                this.setState({
                                    editing:task
                                })
                            }}> 

                                EDIT 
                            </button>:<button onClick={()=>{
                   
                                this.setState({
                                    toDoList:this.state.toDoList.map((data)=>{
                                        if(data.id==task.id){
                                            return this.state.editing
                                        }else{
                                            return data
                                        }
                                    }),
                                    editing:""
                                })

                            
                            }}> 

                                Save
                            </button>}
                            
                        </div>
                    })
                }
               </div>
    }
}

export default App



import React from "react"

let value = 3
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false
        }
        
    }

  

    componentDidCatch(error,info){
        this.setState({
            hasError:true
        })
    }

    render(){
        if(this.state.hasError){
            return <h1>Wrong!</h1>
        }

        return this.props.children
    }
}

class Crash extends React.Component{

  
    render(){
        if (this.state.posts) {
            return this.state.posts.mmmmaaaaapppp(x => <h1>{x}</h1>);
          }
        return <div>Hello</div>
    }
}

class App extends React.Component{
    render(){
        return <div>

        <div>JB</div>
          <ErrorBoundary>
    
               <Crash />
              </ErrorBoundary>
            </div>
        
      
    }
}

export default App



import React,{Fragment }from "react"

let products = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  
  class AppContainer extends React.Component{
      render(){
          return <div>
                {this.props.children}
              </div>
      }
  }

  class SearchBar extends React.Component{
      render(){ 
        return (<div>
                    <div>
                        <input  
                             onChange={this.props.change} 
                             type='text' 
                             name='text'
                             value={this.props.data.text}
                             placeholder="Search..."
                        />
                    </div>

                    <div>
                        <input 
                            onChange={this.props.change} 
                            type='checkbox'
                            name='check'
                            value={ this.props.data.checked} 
                            id='box'/>
                        <label htmlFor='box'>
                            Only Show Product in stock
                        </label>
                    </div>
                </div>)
      }
  }

  const ProductList = (props) =>{
      return <Fragment>
                <tr>
                    <th>{props.category}</th>
                    <th></th>
                </tr>

                 {products.map((price,index)=>{
                        let hasText = price.name.includes(props.filtetText)
                        let condition 
       
                        if(!props.filterStock){
                            condition = price.category===props.category  && hasText
                        }else{
                            condition = price.category===props.category && hasText &&(
                                 price.stocked
                            )
                        }
                      
                        if(condition){
                            return <RowItem key={index} price={price}/>
                        }
                })}
            </Fragment>
  }

 const RowItem = (props) =>{
    return <tr>
            <th>{props.price.name}</th>
            <th>{props.price.price}</th>
        </tr>
}

  class DataTable extends React.Component{
    render(){
      return <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>

                 <tbody>
                   <ProductList
                    category = {'Sporting Goods'}
                    filtetText = {this.props.filtetText}
                    filterStock = {this.props.filterStock}
                   />

                    <ProductList
                    category = {'Electronics'}
                    filtetText = {this.props.filtetText}
                    filterStock = {this.props.filterStock}
                   />

                </tbody>

             </table>
    }
}

class App extends React.Component{
constructor(props){
    super(props)
    this.state = {
        text:"",
        checked:false
    }
    this.hanldeChange = this.hanldeChange.bind(this)
}

hanldeChange(e){
    var name = e.target.name
    if(name==='text'){
        this.setState({
            text:e.target.value
        })
    }else{
        this.setState({
            checked:!this.state.checked
        })
    }
}


    render(){
        return <Fragment>
                <AppContainer>
                    <SearchBar 
                        change={this.hanldeChange} 
                        data={this.state} 
                    />

                    <DataTable 
                    filtetText={this.state.text}
                    filterStock = {this.state.checked}
                    />  
                </AppContainer>
            </Fragment>
    }
}


  export default App
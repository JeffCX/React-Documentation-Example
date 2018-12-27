import React from "react"

class SelectForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'coconut'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        alert(`You like ${this.state.value}`)
    }

    render(){
        return <form onSubmit={this.handleSubmit}>

                    <select value={this.state.value} onChange={this.handleChange}>

                        <option value="grapefruit">
                            Grape Fruit
                        </option>

                         <option value="lime">
                            lime
                        </option>

                          <option value="coconut">
                            Coconut
                        </option>

                    </select>
                    <input type='submit' value='Submit' />
              </form>
    }
}

class ReservationForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isGoing:true,
            numberOfGuests:2
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }


    handleInputChange(event){
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = target.name 
        this.setState({
            [name]:value
        })

        console.log(this.state)
    }


    render(){
        return <form>
            <label>Is Going:</label>
            <input name='isGoing' type='checkbox' checked={this.state.isGoing}
            onChange = {this.handleInputChange}
            />
            <br />
            <label>  Number of guests</label>
            <input 
                name='numberOfGuests'
                type='number'
                value={this.state.numberOfGuests}
                onChange = {this.handleInputChange}
            />

            </form>
    }


     



}

export {SelectForm,ReservationForm}



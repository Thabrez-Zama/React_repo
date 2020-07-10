import React, { Component } from 'react'

export default class states extends Component {
    constructor(props){
        super(props);
        this.state={
            // name:"Thabrez"
            count: 0

        }
    }
     clickMe=()=>{
        this.setState(
            {name: "Parvez"}
        )
    }

    increment = () =>{
        this.setState({ count: this.state.count +1});

    }
    render() {
        
        return (
            <div>
                {/* <h1>Here we are Using states</h1>
                <h2>{this.state.name}</h2>
                <button onClick={()=> this.clickMe()}>Click Me....!</button> */}
                <button onClick={this.increment} className="counter">Click Me(+)</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}



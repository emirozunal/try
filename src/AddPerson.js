import React, { Component } from 'react';

class AddPerson extends Component {
    state= {
        name: null,
        age: null,
        color: null
    }
    
    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log (this.state);
        this.props.addPerson(this.state);
        

    }

    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
               <label htmlFor="name">Name:</label>
               <input type="text" id="name" onChange={this.handleChange}/>
               <label htmlFor="name">Age:</label>
               <input type="text" id="age" onChange={this.handleChange}/>
               <label htmlFor="name">Color:</label>
               <input type="text" id="color" onChange={this.handleChange}/>
               <button>Click Me</button>
               </form> 
            </div>
        )
    }
        
}

export default AddPerson;
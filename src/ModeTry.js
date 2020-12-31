import React, { Component } from 'react';
import './People.css';
//functional comp - 15
class ModeTry extends Component {
    render() {
        // console.log("modetrylog",this.props)
        //   console.log(this.props); 
        // const { people } = this.props;
        // const personList = people.map(person => {
        //     return (
        //         <div className="person" key={person.id}>
        //             <div> Name: {person.name} </div>
        //             <div> Age:{person.age}</div>
        //             <div> Color:{person.color} </div>

        //         </div>
        //     )
        // })
        const { people,deletePerson } = this.props;
        const personList = people.map(person=> {
            return(<div className="person" key={person.id}>
                <div> Name: {person.name} </div>
                <div> Age:{person.age}</div>
                <div> Color:{person.color} </div>
                <button onClick={()=> {deletePerson(person.id)}}>Delete person</button>
            </div>)
        })
       
        return (
            <div className="person-list">
                {personList}
            </div>
        )
    }
}

export default ModeTry; 
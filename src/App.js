import React, {Component} from 'react';
import ModeTry from './ModeTry';
import AddPerson from './AddPerson';


class App extends Component {
  state = {
    people : [
      {name:'MK', age:'30', color:'black', id:'1'},
      {name:'EO', age:'20', color:'yellow', id:'2'},
      {name:'GA', age:'26', color:'white', id:'3'}
    ]
  } 
  addPerson = (person) => {
    // console.log(person)
    person.id=Math.random();
    const people =[...this.state.people, person ];
    this.setState({
      people: people
    })
  }
  deletePerson = (id) => {
    const people=this.state.people.filter(person =>{
      return person.id !== id
    });
    
    this.setState({
      people:people
    })
  }
  componentDidMount(){
    console.log('component mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('component updated')
    console.log(prevProps,prevState)
  }
    render(){
        return (
            <div className="TryMode">
               
                <h1> React App </h1>
                <h2>Welcome...</h2>
                {<ModeTry  deletePerson={this.deletePerson}  people={this.state.people} /> }
                <AddPerson addPerson={this.addPerson}/>
            </div>
        );
    }
}




export default App;
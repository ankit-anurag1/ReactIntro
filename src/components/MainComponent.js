import React from 'react'
import axios from 'axios';
import { Switch, Redirect, Route } from 'react-router-dom'

import Navbar from './Navbar'
import PersonList from './PersonList'
import PersonDetail from './PersonDetail'
import About from './AboutComponent'

class MainComponent extends React.Component {
  constructor(){
      super();
      this.state = {
          persons: []
      };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render(){

      const PersonDetailComponent = ({ match }) => {
        return (
          <PersonDetail person={this.state.persons.filter((person) =>
          person.id === parseInt(match.params.id, 10))[0]} />
        );
      }

      const PersonListComponent = () => {
        return (
          <PersonList persons={this.state.persons} />
        );
      }

      return(
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/aboutus' component={ About } />
              <Route exact path='/person/:id' component={ PersonDetailComponent } />
              <Route exact path='/home' component={ PersonListComponent } />
              <Redirect to='/home' />
            </Switch>
          </div>
        </>
      )
  }

}

export default MainComponent

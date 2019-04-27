import React from 'react';
import { Link } from 'react-router-dom'

function PersonList(props){
    return (
      <>
        <h1 className="jumbotron">A list of mortals.</h1>
        <ul className="list-unstyled">
          { props.persons.map(person =>
                  <li>
                    <Link to={`/person/${person.id}`}>
                      <div class="card">
                        <div class="card-body">
                          {person.name}
                        </div>
                      </div>
                    </Link>
                  </li>)}
        </ul>
      </>
    );
  }

export default PersonList

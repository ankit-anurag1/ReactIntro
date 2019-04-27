import React from 'react'
import axios from 'axios'

function PersonDetail({person}) {
  return(
    <>
      <h1 className="jumbotron">This is one mortal.</h1>
      <div className="row">
        <div className="card col-5 m-auto">
          <div className="card-body">
            <h4 className="card-title d-4">{ person.name }</h4>
            <p className="crad-text">
                { person.username }
                <br />
                { person.email }
                <br />
                { person.phone }
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonDetail

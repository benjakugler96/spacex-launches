import React, { Fragment } from "react";
import LAUNCH_QUERY from "../../querys/launch.query";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";

const Launch = props => {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);
  return (
    <Fragment>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) return console.log(error);
          const {
            mission_name,
            flight_number,
            launch_year,
            launch_success,
            rocket: { rocket_id, rocket_name, rocket_type }
          } = data.launch;
          return (
            <div>
              <h1 className='display-4 my-3'>
                <span className='text-dark'>Mission:</span> {mission_name}
              </h1>
              <h4 className='mb-3'>Launch Details</h4>
              <ul className='list-group'>
                <li className='list-group-item'>
                  Flight number: {flight_number}
                </li>
                <li className='list-group-item'>Launch year: {launch_year}</li>
                <li className='list-group-item'>
                  Launch successfull: {launch_success ? "Yes" : "No"}
                </li>
              </ul>
              <h4 className='mb-3'>Rocket Details</h4>
              <ul className='list-group'>
                <li className='list-group-item'>Rocket number: {rocket_id}</li>
                <li className='list-group-item'>Rocket name: {rocket_name}</li>
                <li className='list-group-item'>Rocket type: {rocket_type}</li>
              </ul>
              <hr />
              <Link to='/' className='btn btn-secondary'>
                Back
              </Link>
            </div>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default Launch;

import React, { Component, Fragment, useState, useEffect } from "react";
import { Query } from "react-apollo";
import LaunchItem from "../LaunchItem";
import ColorKeys from "../ColorKeys";
import LAUNCHES_QUERY from "../../querys/launches.query";

const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [mission, setMission] = useState("");

  const onChange = e => {
    setMission(e.target.value);
  };

  const filterArray = () => {
    const filteredLaunches = launches.filter(launch =>
      launch.mission_name.includes(mission)
    );
    return filteredLaunches.map(launch => (
      <LaunchItem key={launch.flight_number} launch={launch} />
    ));
  };
  return (
    <Fragment>
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Search mission name'
          id='inputDefault'
          onChange={onChange}
        />
      </div>
      <ColorKeys />
      {mission === "" ? (
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) return console.log(error);
            setLaunches(data.launches);
            return (
              <Fragment>
                {launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
              </Fragment>
            );
          }}
        </Query>
      ) : (
        filterArray()
      )}
    </Fragment>
  );
};

export default Launches;

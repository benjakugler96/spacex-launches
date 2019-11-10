import React from "react";
import { Link } from "react-router-dom";
import "./LaunchItem.css";

const LaunchItem = props => {
  const {
    launch: {
      flight_number,
      mission_name,
      launch_year,
      launch_date_local,
      launch_success
    }
  } = props;
  return (
    <div className='card card-body mb-3'>
      <div className='col-md-9'>
        <h4>
          Mission:{" "}
          <span className={launch_success ? "text-success" : "text-danger"}>
            {mission_name}
          </span>
        </h4>
        <p>Date: {launch_year}</p>
      </div>
      <div className='col-md-3'>
        <Link to={`/launch/${flight_number}`} className='btn btn-secondary'>
          Launch Details
        </Link>
      </div>
    </div>
  );
};

export default LaunchItem;

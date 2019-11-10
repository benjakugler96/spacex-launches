import gql from "graphql-tag";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      launch_year
    }
  }
`;

export default LAUNCHES_QUERY;

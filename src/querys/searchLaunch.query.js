import gql from "graphql-tag";

export const SEARCH_LAUNCH_QUERY = gql`
  query LaunchQuery($mission_name: String!) {
    launch(mission_name: $mission_name) {
      flight_number
      mission_name
      launch_year
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export default SEARCH_LAUNCH_QUERY;

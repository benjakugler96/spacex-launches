import React from "react";
import logo from "./spacex.png";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className='container'>
          <img
            src={logo}
            alt='SpaceX'
            style={{ width: 300, margin: "auto", display: "block" }}
          />
          <Route exact path='/' component={Launches} />
          <Route exact path='/launch/:flight_number' component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

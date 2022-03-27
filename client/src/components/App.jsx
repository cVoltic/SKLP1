/**
 * Functional components to define the app layout
 * Define the available urls
 */
import React from "react";
import Layout from "./Layout";
import Urls from "./Urls";


function App(props) {
  return (
    <div>
      <Layout {...props}>
        <Urls {...props} />
      </Layout>
    </div>
  );
}

export default App;

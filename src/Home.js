import React from "react";

const Home = props => (
  <div
    style={{
      background: `url(${props.pic}) center center`
    }}
    className="page"
  >
    <div className="pageRoot">
      <div>Bienvenue sur notre site !</div>
    </div>
  </div>
);

export default Home;

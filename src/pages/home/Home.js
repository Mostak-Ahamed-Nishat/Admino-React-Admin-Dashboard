import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../sass/home.scss";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">Home Container</div>
    </div>
  );
}

export default Home;

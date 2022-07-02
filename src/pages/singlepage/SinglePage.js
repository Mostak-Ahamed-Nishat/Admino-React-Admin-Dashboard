import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../sass/singlepage.scss";

function SinglePage() {
  return (
    <div className="singlepage">
      <Sidebar />
      <div className="singlePageContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1>Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Item image"
                className="itemImg"
              />
              <div className="details"></div>
            </div>
          </div>
          <div className="right">Right</div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default SinglePage;

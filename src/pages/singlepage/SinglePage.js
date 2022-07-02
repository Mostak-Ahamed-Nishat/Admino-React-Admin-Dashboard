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
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Item image"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Nishat Mostakim</h1>
                <div className="detailItem">
                  <span className="itemKey">EmaiL:</span>
                  <span className="itemValue">mostakahamed484@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">01778831339</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Dhanmondi,Dhaka,Bangladesh</span>
                </div>
              </div>
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

import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../sass/newpage.scss";
function Newpage({ inputs, title }) {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="topNew">
          <h1>{title}</h1>
        </div>
        <div className="bottomNew">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="No img"
              className="userImg"
            />
          </div>
          <div className="right">
            <form action="" method>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              {/* <div className="formInput">
                <label>First Name</label>
                <input type="text" placeholder="mostak_ahamed" />
              </div> */}

              {inputs.map((input) => (
                <div className="formInput">
                  <label>{input.label}</label>
                  <input type={input.text} placeholder={input.placeholder} />
                </div>
              ))}

              <div className="formInput">
                <button className="submitButton">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newpage;

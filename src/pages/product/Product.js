import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../sass/product.scss";
import Newpage from "../newpage/Newpage";

function Product() {
  return (
    <div className="product">
      <Sidebar />
      <div className="productContainer">
        <Navbar />
        <Newpage />
      </div>
    </div>
  );
}

export default Product;

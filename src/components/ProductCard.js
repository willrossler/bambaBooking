import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import bottle from "../assets/images/bottle.jpg";
const ProductCard = () => {
  return (
    <>
      <div className="container">
        <div
          style={{ width: "auto" }}
          className="cardContainer d-flex flex-column"
        >
          <img src={bottle} />
          <div className="d-flex flex-row justify-content-between">
            <div className="priceName d-flex flex-column">
              <div style={{ color: "#fff" }}>Bamba Vattenflaska</div>
              <div style={{ color: "#F5AAC9" }}>150 SEK</div>
            </div>
            <div className="priceName d-flex align-items-center">
              <AddShoppingCartIcon style={{ fontSize: "30px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

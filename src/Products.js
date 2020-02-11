import React from "react";
import "./Products.css";

const Products = props => (
  <div
    style={{
      background: `url(${props.pic}) center center`
    }}
    className="page"
  >
    <div className="pageRoot">
      <div>
        <div>Nos produits :</div>
        {props.products.map(item => (
          <div className="product">
            <div className="image">
              <img src={item.image} alt="Produit" style={{ height: "200px" }} />
            </div>
            <div className="infos">
              <span className="product-title">{item.nom}</span>
              <span className="product-price">{item.prix} €</span>
              <span>{item.description}</span>
            </div>
            <div className="buy">
              <a href="#" onClick={() => alert("Yay !")} className="myButton">
                Acheter
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Products;

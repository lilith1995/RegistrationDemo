import React from "react";

import "./ProductsList.scss";

const ProductsList = ({ img, title, description, price }) => {
    return (
        <div className="productsList">
            <div>
                <img src={img} alt={title} />
            </div>
            <div className="productsList-text">
                <h4>{title}</h4>
                <p>{description}</p>
                <span>{price}</span>
            </div>
        </div>
    );
};

export default ProductsList;
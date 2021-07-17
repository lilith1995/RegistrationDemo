import React from "react";

import ProductsList from "../../components/Products/ProductsList";
import { productsData } from "../../productsData/productsData";

import "./Products.scss";

class Products extends React.Component {
    render() {
        return (
            <div className="products">
                <div className="container-products">
                    {productsData.map((el) => {
                        return <ProductsList img={el.img} title={el.title} description={el.description} price={el.price} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Products;
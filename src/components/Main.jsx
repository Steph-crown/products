import React from "react";
import "./../css/Main.css";
import Product from "./Product";

export default function Main(props) {
    let productsJSX = props.products.map(x => (
        <Product key={x._id} data={x} />
    ))
    return (
        <div className="main">
            
            <label className="input-group">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Input your search term" />
                <p>&times;</p>
            </label>
            <p>
                Search Results for <b>"{"Dress"}"</b>
            </p>
            <section className="products">
                {productsJSX}
            </section>

            
        </div>
    );
}


import React from "react";
import "./../css/Main.css";
import Product from "./Product";
import ProductDescription from "./ProductDescription";

export default function Main() {
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
                <Product />
            </section>

            
        </div>
    );
}

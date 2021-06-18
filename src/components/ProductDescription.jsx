import React from "react";
import Image from "./../assets/image.png";
import "./../css/ProductDescription.css";

export default function ProductDescription() {
    return (
        <div className="product-details">
            <img src={Image} alt="" />
            <div className="details">
                <h1>Brown Jacket (L)</h1>
                <p>{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusantium doloremque nam voluptatem minima? Sequi deserunt numquam consequatur architecto ipsam maiores est amet impedit voluptatem alias cupiditate, et, ad error!".slice(0,160) + "..."}<b>Read More</b></p>
                <div className="button-group">
                    <button className="fa fa-heart"></button>
                    <button>$ 325 Add to cart</button>
                </div>
            </div>
        </div>
    );
}

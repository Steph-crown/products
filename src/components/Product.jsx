import React from "react";
import "./../css/Product.css";
import Image from "./../assets/image.png";
import StarRating from "./../components/StarRating.jsx";

export default function Product({data}) {
    return (
        <div className="product">
            <img src={Image} alt="" />
            <i className="abs fa fa-heart-o"></i>
            <h2>{data.name}</h2>
            <StarRating
                rating={3}
                changeRating={(rating) => {
                    console.log(rating);
                }}
            />
            <div className="prices">
                <div>
                    <p>Price</p>
                    <h4>$ {data.price}</h4>
                </div>
                <button>Add to cart</button>
            </div>
            {/* <StarRating /> */}
        </div>
    );
}

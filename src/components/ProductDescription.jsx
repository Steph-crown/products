import React from 'react';
import Image from "./../assets/image.png";
import './../css/ProductDescription.css'


export default function ProductDescription() {
    return (
        <div className="product-details">
            <img src={Image} alt="" />
        </div>
    )
}

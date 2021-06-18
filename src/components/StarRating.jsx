import React from 'react';
import ReactStars from 'react-rating-stars-component';

export default function StarRating(props) {
    const ratingChanged = (newRating) => {
        // console.log(newRating);
        props.changeRating(newRating);
    };

    return (
        <div>
            <ReactStars
                value={props.rating}
                count={5}
                onChange={ratingChanged}
                size={20}
                isHalf={false}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="var(--yellow)"
            />
        </div>
    )
}

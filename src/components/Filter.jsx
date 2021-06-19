import React, { useEffect } from "react";
import "./../css/Filter.css";
import CheckBox from "./CheckBox";
import StarRating from "./../components/StarRating.jsx";

export default function Filter() {
    useEffect(() => {
        console.log("eff");
        return () => {
            console.log("pop");
        };
    }, []);
    return (
        <React.Fragment>
            <div className="left-md">
                <section>
                    <h3>Filter</h3>
                </section>

                <section>
                    <h3>Price Range</h3>
                    <div className="flex">
                        <p className="muted">Min</p>
                        <label className="input-field">
                            $<input type="number" />
                        </label>
                    </div>
                    <button>Set Price</button>
                </section>

                <section>
                    <h3>Rating</h3>
                    <div className="flex">
                        <CheckBox />
                        <div className="star-comp ">
                            <StarRating
                                rating={3}
                                changeRating={(rating) => {
                                    console.log(rating);
                                }}
                            />
                        </div>
                    </div>
                </section>
            </div>
            <div className="filter-sm"></div>
        </React.Fragment>
    );
}

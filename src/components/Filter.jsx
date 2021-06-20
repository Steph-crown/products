import React, { useEffect, useState } from "react";
import "./../css/Filter.css";
import CheckBox from "./CheckBox";
import StarRating from "./../components/StarRating.jsx";

export default function Filter() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetches categories from api
        fetch("https://agile-lowlands-53275.herokuapp.com/categories")
            .then((response) => response.json())
            .then(({ data }) => {
                setCategories(data);
            });
        return () => {};
    }, []);
    return (
        <React.Fragment>
            <div className="left-md">
                <section>
                    <h3>Filter</h3>
                </section>

                {categories && categories.length !== 0
                    ? categories.map(x => 
                          <div>
                              <CheckBox /> <p>{x.name}</p>
                          </div>
                      )
                    : "Loading Categories"}
            </div>
            <div className="filter-sm"></div>
        </React.Fragment>
    );
}

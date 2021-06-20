import React, { useState } from "react";
import "./../css/Pagination.css";

export default function Pagination({
    numOfPages,
    selectPage,
    goBack,
    goForward,
    activePage,
}) {
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true);

    let numOfPagesArr = [...Array(numOfPages)];

    // The dots in the pagination
    let pagesDots = numOfPagesArr.map((x, index) => (
        <div className={"circle " + ((activePage === index + 1)? "selected" : "")}onClick={() => selectPage(index + 1)}></div>
    ));
    return (
        <div className="pagination">
            <i
                className={"fa fa-caret-left arrow " + String(leftArrow)}
                onClick={() => {
                    if (activePage > 1) {
                        goBack();
                        setRightArrow(true)
                    }
                    // Disable left arrow from clicking
                    else {
                        setLeftArrow(false);
                    }
                }}
            ></i>
            <div className="dots">{pagesDots}</div>
            <i
                className={"fa fa-caret-right arrow " + String(rightArrow)}
                onClick={() => {
                    if (activePage < numOfPages) {
                        goForward();
                        setLeftArrow(true)
                    }
                    // Disable right arrow from clicking
                    else {
                        setRightArrow(false);
                    }
                }}
            ></i>
        </div>
    );
}

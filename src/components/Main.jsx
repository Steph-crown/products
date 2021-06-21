import React, { useState } from "react";
import "./../css/Main.css";
import Product from "./Product";
import Pagination from "./Pagination";

export default function Main(props) {
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, updateProducts] = useState(props.products)
    
    let products = filteredProducts.slice(activePage * 20 - 20, activePage * 20);

    let productsJSX = products.map((x) => <Product key={x._id} data={x} />);

    const goBack = () => {
        setActivePage(activePage - 1);
    };

    const goForward = () => {
        setActivePage(activePage + 1);
    };

    const selectPage = (pageNo) => {
        setActivePage(pageNo);
    };

    const handleSearchInput = (e) => {
        setSearchTerm(searchTerm);
        updateProducts("")
    }

    return (
        <div className="main">
            <label className="input-group">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Input your search term" value={searchTerm} onChange={handleSearchInput} />
                <p>&times;</p>
            </label>
            <p>
                Search Results for <b>"{"Dress"}"</b>
            </p>
            <section className="products">{productsJSX}</section>

            <section>
                <Pagination
                    activePage={activePage}
                    numOfPages={Math.ceil(props.products.length / 20)}
                    selectPage={selectPage}
                    goBack={goBack}
                    goForward={goForward}
                />
            </section>
        </div>
    );
}

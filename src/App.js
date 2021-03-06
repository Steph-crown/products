import React, { useEffect, useState } from "react";
import Filter from "./components/Filter.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import "./App.css";
import ProductDescription from "./components/ProductDescription.jsx";

export default function App(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Fetches products from api
        fetch("https://agile-lowlands-53275.herokuapp.com/products")
            .then((response) => response.json())
            .then(({ data }) => {
                setProducts(data);
            });

        return () => {};
    }, [props]);

    return (
        <div className="body">
            <header>
                <Header />
            </header>
            {products && products.length !== 0 ? (
                <main>
                    <section className="left">
                        <Filter />
                    </section>
                    <section className="center">
                        <Main products={products} />
                    </section>
                    <section className="right">
                        <ProductDescription />
                    </section>
                </main>
            ) : (
                "Loading"
            )}
        </div>
    );
}




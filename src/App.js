import React from "react";
import Filter from "./components/Filter.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import "./App.css";
import ProductDescription from "./components/ProductDescription.jsx";

export default function App() {
    return (
        <div className="body">
            <header>
                <Header />
            </header>
            <main>
                <section className="left">
                    <Filter />
                </section>
                <section className="center">
                    <Main />
                </section>
                <section className="right">
                    <ProductDescription />
                </section>
            </main>
        </div>
    );
}

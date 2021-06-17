import React from "react";
import Filter from "./components/Filter.jsx";
import Header from "./components/Header.jsx";
import './App.css'

export default function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <section className="left">
                    <Filter />
                </section>
                <section className="center"></section>
                <section className="right"></section>
            </main>
        </div>
    );
}

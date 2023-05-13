import React from "react"
import Header from "./components/Header"
import Travels from "./components/Travels"

export default function App() {
    return (
        <div className="container flex column">
            <Header />
            <Travels />
        </div>
    )
}
import React from "react"
import data from "../data"
import Travel from "./Travel"

export default function Travels() {
    const travels = data.map(travel => <Travel key={travel.id} travel={travel}/>)
    return (
        <main className="flex column">
            {travels}
        </main>
    )
}
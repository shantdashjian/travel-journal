import React from "react"

export default function Travel({ travel }) {
    return (
        <section className="travel flex">
            <img className="travel--img" src={travel.imageUrl} alt={travel.title}/>
            <div className="flex column travel--text">
                <div className="flex location-container regular">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4 className="travel--location regular">{travel.location}</h4>
                    <a target="_blank" href={travel.googleMapsUrl} className="travel--google-maps">View on Google Maps</a>
                </div>
                <h2 className="travel--title bold">{travel.title}</h2>
                <div className="travel--dates">
                    <span>{travel.startDate}</span> - <span>{travel.endDate}</span>
                </div>
                <p className="travel--description regular">{travel.description}</p>
            </div>
        </section>
    )
}
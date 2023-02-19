import React from "react"

export default function Journal(props) {
    return(
        <div className="trip--item">
            <img className="trip--img" src={props.item.imageUrl} />
            <div className="trip--details">
                <div className="location-details">
                    <img src="../location.svg" />
                    <h5>{props.item.location}</h5>
                    <a href={props.item.googleMapsUrl}><p>View on Google Maps</p></a>
                </div>
                <h1>{props.item.title}</h1>
                <div className="trip--date">
                    <p>{props.item.startDate} - </p>
                    <p>{props.item.endDate}</p>
                </div>
                <p className="trip--description">{props.item.description}</p>
            </div>
        </div>
    )
}
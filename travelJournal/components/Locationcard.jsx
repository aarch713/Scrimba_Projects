import React from 'react'

export default function Content(props){
    return(
        <div className="siteCard">
            <img src={props.imageUrl}/>
            <div className="desc">
                <div className="location format0"><i class="fa-solid fa-location-dot"></i><p>{props.location}</p>
                <a target="_blank" href={props.googleMapsUrl} >
                    <p> View on Google Maps</p>
                </a></div>
                <h2 className="format0">{props.title}</h2>
                <p className="format0 dateP">{props.startDate} to {props.endDate}</p>
                <p className="format0 descs">{props.description}</p>
            </div>
        </div>
    )
}
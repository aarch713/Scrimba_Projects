import React from "react"
export default function Counter(props){
    


    return(
        <div className="counter">
            <h1>Roll counter:{props.countC}</h1>
            <h1 className="timeHolder">Time to finish:<span className="timeRender">{props.countT}</span></h1>
        </div>
    )
}
import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    console.log('Im in box')
    return (
        <div 
            style={styles} 
            className="box"
            onClick={props.toggle}
        >
        </div>
    )
}
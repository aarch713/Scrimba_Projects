import React from 'react'
export default function Die(props){
    const styles = {backgroundColor:props.isHeld? "#59E391" : "white"}

    let renderVal =''
        switch(props.value){
            case 1: renderVal =
            <div className ="one">
                <div></div>
            </div>
            break;
            case 2: renderVal = <div className ="two">
                <div className="trans"></div>
                <div className="twoSub1"></div>
                <div className="twoSub2"></div>
                <div className="trans"></div>
                </div>
            break;
            case 3: renderVal = <div className ="three">
                <div></div>
                <div className="trans"></div>
                <div className="trans"></div>
                <div className="trans"></div>
                <div></div>
                <div className="trans"></div>
                <div className="trans"></div>
                <div className="trans"></div>
                <div></div>
                </div>
            break;
            case 4: renderVal = <div className ="four">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            break;
            case 5: renderVal = <div className ="five">
                <div></div>
                <div className="trans"></div>
                <div></div>
                <div className="trans"></div>
                <div></div>
                <div className="trans"></div>
                <div></div>
                <div className="trans"></div>
                <div></div>
                </div>
            break;
            case 6: renderVal = <div className ="six">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            break;
        }
    return (
        // {props.value}


        

        <div className="die-con">
            <h2 onClick={props.holdDice}  style={styles} className="die-num">{renderVal}</h2>
            
        </div>
    )

}
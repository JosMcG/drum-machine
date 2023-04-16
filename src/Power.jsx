import {useState} from "react";
import './Power.css';

function Power (props) {
    const [label, setLabel] = useState("ON");
    const handleClick = (event) => {
        props.power ? setLabel("OFF") : setLabel("ON");
        props.setPower(!props.power);
    }
    let buttonColor =  (label == "ON") ? {backgroundColor: "#00FFD1"} : {backgroundColor: "#FF1E1E"};

    return (
        <button id="power-button" onClick={handleClick}
            style={buttonColor}>{label}</button>
    );
}

export default Power

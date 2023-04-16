import './SoundVolume.css';

function SoundVolume (props) {

    const handleChange = (event) => {
        props.setVolume(event.target.value);
    }

    return(
        <div id="vol-controls">
            <input 
                id="volume-slider"
                type="range" 
                min={1} 
                max={100} 
                value={props.volume}
                onChange={handleChange} />
            <p id="volume">Volume: {props.volume}</p>
        </div>
    )
}

export default SoundVolume


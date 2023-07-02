import {SoundItems} from "./SoundItems";
import SoundButton from "./SoundButton";
import './SoundButtons.css';


function SoundButtons (props) {
    return (
        <div id="sound-buttons">
            {SoundItems.map(s => <SoundButton volume={props.volume} 
                                              power={props.power} 
                                              key={s.key} 
                                              soundItem={s}
                                              setSoundLabel={props.setSoundLabel} />)}
        </div>
    );
}

export default SoundButtons
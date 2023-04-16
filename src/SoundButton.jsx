import useKeyPress from "./SoundHook";
import './SoundButton.css';


const SoundButton = (props) => {
    const s = props.soundItem;
    
    const makeSound = async (event) => {
        //use javascript Audio object rather than getElementById to eliminate race condition (sound hang)
        //if using getElementById, you need to reload with every button click
        //js Audio creates a new object with every click
        let x = new Audio(s.sound);
        x.volume = props.volume/100;  //Audio needs the value to be between 0-1
        x.muted = !props.power;
        x.play();
        props.setSoundLabel(s.id);
        
    }

    useKeyPress(s.key, makeSound, props.volume, props.power);
    
    
    return (
        <span>
            <audio className="clip" id={s.key} src={s.sound}/>
            <button className="drum-pad" id={s.id} onClick={makeSound}>
                {s.key}
            </button>
        </span>
    );
};

export default SoundButton;
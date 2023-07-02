import SoundButtons from './SoundButtons';
import SoundVolume from './SoundVolume';
import {useState} from 'react';
import Power from './Power';
import SoundDisplay from './SoundDisplay';
import './App.css';


const App = () => {

  const [vol, setVol] = useState(50);
  const [pow, setPow] = useState(true); 
  const [soundName, setSoundName] = useState();
  const getPowLabel = (label) => {console.log(label);}
  let headingOutline =  pow ? {webkitTextStroke: "1px #00FFD1"} : {webkitTextStroke: "1px #FF1E1E"};
  
  return (
    <div>
      <header>
        <img src="colorful-music.jpg"/>
        <h1 style={headingOutline}>Drum Machine</h1>
      </header>
      <div id="drum-machine">
          <div>
            <SoundButtons volume={vol} power={pow} setSoundLabel={setSoundName}/>
          </div>
          <div id="controls">
            <Power power={pow} setPower={setPow} func={getPowLabel}/>
            <SoundVolume volume={vol} setVolume={setVol}/>
            <SoundDisplay id="display" soundLabel={soundName}/>
          </div>
      </div>
      <footer><a href="https://www.freepik.com/free-vector/banner-music-notes-colourful-white-background_27288353.htm#query=music%20notes%20color&position=2&from_view=keyword&track=ais">Image by brgfx</a> on Freepik</footer>
    </div>
  );
}

export default App

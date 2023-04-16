import {useState, useEffect} from 'react';

const useKeyPress = (targetKey, makeSound, volume, muted) => {
    const [keyPressed, setKeyPressed] = useState(false);
    function handleKeyDown({key}) {
      if(key.toUpperCase() === targetKey){
        setKeyPressed(true);
        makeSound();
      }
    }
    function handleKeyUp({key}) {
      if(key.toUpperCase() === targetKey){
        setKeyPressed(false);
      }
    };
    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);      
      };
    }, [volume, muted]);
    return keyPressed;
  };

  export default useKeyPress
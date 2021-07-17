import React, {useState} from 'react';
import errorSound from '../sounds/error.mp3'
export const Error = () => {
  let [active, setActive] = useState(false);
  return <li onClick={() => {
    setActive(!active);
    setImmediate(() => {
      let sound = new Audio(errorSound);
      sound.play();
    })

  }} className={active ? "errors__error active" : "errors__error"}/>
}

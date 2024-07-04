import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterCompo = () => {
    return (
        <>
            <h3>I am 
            <Typewriter 
              words={[' a Web Developer', ' a Programmer', ' an Engineering Student']}
              loop = {0}
              cursor
              cursorStyle = '|'
              cursorColor="red"
              typeSpeed={70}
              deletSpeed={50}
              delaySpeed={1000}
            />
            </h3>
        </>
    )
}

export default TypewriterCompo;
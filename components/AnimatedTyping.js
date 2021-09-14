import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const AnimatedTyping = ({ strings, sameLineText, nextLineText }) => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
      loopCount: Infinity,
    };
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="text-5xl">
      <span className="whitespace-pre text-green-600" ref={el} />
      <span className="pl-1">{sameLineText}</span>
      <span className="block">{nextLineText}</span>
    </div>
  );
};

export default AnimatedTyping;

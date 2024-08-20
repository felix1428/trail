import React, { useEffect, useRef } from 'react';

const VantaEffect = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');

    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.0/vanta.birds.min.js";

    script1.onload = () => {
      script2.onload = () => {
        if (window.VANTA && window.VANTA.BIRDS) {
          const effect = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            colorMode: "lerp"
          });

          return () => {
            if (effect) {
              effect.destroy();
            }
          };
        } else {
          console.error("VANTA or VANTA.BIRDS is not defined");
        }
      };
      document.body.appendChild(script2);
    };
    document.body.appendChild(script1);

  }, []);

  return <div ref={vantaRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default VantaEffect;

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';
import NET from 'vanta/dist/vanta.net.min'; // Add other effects as needed
import WAVES from 'vanta/dist/vanta.waves.min';
import BIRDS from 'vanta/dist/vanta.birds.min';
const VantaBackground = ({ effect }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    window.THREE = THREE;

    let vantaEffect;
    if (effect === 'rings') {
      vantaEffect = RINGS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
      });
    } else if (effect === 'net') {
      vantaEffect = NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        speed:2,
        scaleMobile: 1.00,
        color: 0x110808,
        backgroundColor: 0xa08ed4
      });
    } else if (effect === 'waves') {
      vantaEffect = WAVES({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
      });
    }else if (effect === 'birds') {
      vantaEffect = BIRDS({
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
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [effect]);
  
  return <div ref={vantaRef} style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;

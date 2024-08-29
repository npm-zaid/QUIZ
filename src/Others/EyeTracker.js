import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function EyeTracker() {
  const eyeLeft = useRef(null);
  const eyeRight = useRef(null);

  useEffect(() => {
  

    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;

    gsap.to(eyeLeft.current, { x: x *.04, y: y *.1, duration: 0.3 });
      gsap.to( eyeRight.current, { x: x *.04, y: y *.1, duration: 0.3 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes bg-slate-500">
      <div className="eye" >
        <div ref={eyeLeft} className="pupil"></div>
      </div>
      <div className="eye" >
        <div ref={eyeRight} className="pupil"></div>
      </div>
    </div>
  );
}

export default EyeTracker;
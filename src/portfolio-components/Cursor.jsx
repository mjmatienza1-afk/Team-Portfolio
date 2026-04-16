import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css'; // REMOVED './components/' because the file is already in the components folder

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        // We add the second translate here to ensure it stays centered
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleHover = (e) => {
      if (e.target.closest('[data-hover="true"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef} 
        className="cursor-dot" 
      />
      <div 
        ref={ringRef} 
        className={`cursor-ring ${isHovering ? 'hovering' : ''}`} 
      />
    </>
  );
};

export default Cursor; // <--- MAKE SURE THIS LINE EXISTS
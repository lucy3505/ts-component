import React, { memo, useState, useEffect } from "react";

const MouseTracker = memo(() => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("inner");
    const updateMouse = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("click", updateMouse);
    return () => {
      console.log("remove");
      document.removeEventListener("click", updateMouse);
    };
  }, [show]);
  console.log("before render");
  return (
    <>
      <button onClick={() => setShow(!show)}>toggle tracker</button>
      <h2>
        {show && (
          <div>
            position X:{position.x};position Y:{position.y}
          </div>
        )}
      </h2>
    </>
  );
});

export default MouseTracker;

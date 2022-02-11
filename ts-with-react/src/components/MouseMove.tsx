import React, { memo, useState, useEffect } from "react";
import useMousePosition from "./../hooks/useMousePosition";

const MouseTracker = memo(() => {
  const [show, setShow] = useState(false);

  const position = useMousePosition([show]);
  return (
    <>
      <button onClick={() => setShow(!show)}>toggle tracker--move</button>
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

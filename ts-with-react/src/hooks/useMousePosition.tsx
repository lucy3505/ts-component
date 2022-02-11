import React, { memo, useState, useEffect } from "react";

const useMousePosition = (deps: any[] = []) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
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
  }, deps);
  return position;
};

export default useMousePosition;

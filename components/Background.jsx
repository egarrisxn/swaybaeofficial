import React, { useState } from "react";

const MyBackground = () => {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const handlePointerMove = (e) => {
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    setPosX(x - l - w / 2);
    setPosY(y - t - h / 2);
  };

  return (
    <div
      className="relative"
      style={{ "--posX": `${posX}px`, "--posY": `${posY}px` }}
      onMouseMove={handlePointerMove}
    ></div>
  );
};

export default MyBackground;

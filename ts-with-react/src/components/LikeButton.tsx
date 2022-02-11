import React, { memo, useEffect, useState } from "react";

const LikeButton: React.FC = memo(() => {
  // const [like, setLike] = useState(0);
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);

  useEffect(() => {
    console.log("document title is running");
    document.title = `点击了${like}次`;
  }, [like]);
  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}赞
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "on" : "off"}
      </button>
    </>
  );
});

export default LikeButton;

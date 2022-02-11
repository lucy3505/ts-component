import React, { memo, useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ContextButton";

const LikeButton: React.FC = memo(() => {
  // const [like, setLike] = useState(0);

  const themes = useContext(ThemeContext);

  return (
    <>
      <button style={themes}>theme button</button>
    </>
  );
});

export default LikeButton;

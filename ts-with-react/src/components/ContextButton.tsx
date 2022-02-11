import React, { memo, FC, createContext, useState } from "react";
import LikeButton from "./LikeButton3";

interface IThemeContext {
  [key: string]: { color: string; background: string };
}
const themes: IThemeContext = {
  light: { color: "#e78d8d", background: "#f8a0f8" },
  dark: { color: "#922424", background: "#6f18e0" },
};
export const ThemeContext = createContext(themes.light);
const ContextButton: FC = memo(() => {
  const [themeColor, setThemeColor] = useState(themes.light);
  const handleTheme = () => {
    setThemeColor(themes.dark);
  };

  return (
    <ThemeContext.Provider value={themeColor}>
      <div>
        <button onClick={handleTheme}>change theme</button>
        <LikeButton />
      </div>
    </ThemeContext.Provider>
  );
});

export default ContextButton;

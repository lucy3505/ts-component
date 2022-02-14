import classNames from "classnames";
import React, { createContext, FC, memo, useState } from "react";

import { MenuItemProp } from "./MenuItem";
type MenuMode = "horizontal" | "vertical";

interface MenuProps {
  mode?: MenuMode;
  defaultIndex?: string;
  onSelect?: (selectIndex: string) => void;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  defaultSubMenus?: string[];
}
interface ContextProp {
  activeIndex: string;
  onSelect?: (selectIndex: string) => void;
  mode?: MenuMode;
  defaultSubMenus?: string[];
}

export const MenuContext = createContext<ContextProp>({
  activeIndex: "0",
  mode: "vertical",
});

const Menu: FC<MenuProps> = (props) => {
  const { mode, defaultIndex, onSelect, className, children, defaultSubMenus } =
    props;
  const [currentIndex, setIndex] = useState(defaultIndex || "0");

  const classes = classNames("viking-menu", className, {
    [`menu-${mode}`]: mode,
  });
  const handleSelect = (index: string) => {
    setIndex(index);
    onSelect && onSelect(index);
  };

  const passedContext = {
    activeIndex: currentIndex,
    onSelect: handleSelect,
    mode,
    defaultSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProp>;
      const { displayName } = childElement.type;

      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: index.toString() });
      } else {
        console.log(childElement);
        console.log("warning");
      }
    });
  };
  return (
    <MenuContext.Provider value={passedContext}>
      <ul className={classes}>{renderChildren()}</ul>;
    </MenuContext.Provider>
  );
};
Menu.defaultProps = {
  mode: "horizontal",
  // mode: "vertical",
  defaultIndex: "0",
  defaultSubMenus: [],
};

export default memo(Menu);

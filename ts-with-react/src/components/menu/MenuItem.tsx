import classNames from "classnames";
import React, { FC, memo, useContext } from "react";
import { MenuContext } from "./Menu";

export interface MenuItemProp {
  index?: string;
  disabled?: Boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: FC<MenuItemProp> = (props) => {
  const { className, index, disabled, style, children } = props;
  const context = useContext(MenuContext);
  const { onSelect, activeIndex } = context;

  const classes = classNames("menu-item", className, {
    [`is-disabled`]: disabled,
    [`is-active`]: activeIndex === index,
  });

  const handleClick = () => {
    onSelect && !disabled && index && onSelect(index);
  };

  return (
    <li
      className={classes}
      style={style}
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </li>
  );
};
MenuItem.displayName = "MenuItem";

export default MenuItem;

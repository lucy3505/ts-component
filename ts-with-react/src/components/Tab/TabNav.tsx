import classNames from "classnames";
import React, { FC, memo, useContext } from "react";
import { TabContext } from "./Tabs";

export interface TabNavProp {
  label: any;
  index: string;
  disabled?: boolean;
}

const TabNav: FC<TabNavProp> = (props) => {
  const { label, index, disabled } = props;

  const context = useContext(TabContext);
  const { activeIndex, type, onSelect } = context;
  const classes = classNames("tab-nav-item", {
    "is-active": activeIndex === index,
    "is-disabled": disabled,
    [`nav-card`]: type === "card" || type === "editable-card",
  });

  const handleClick = (e: React.MouseEvent) => {
    onSelect && !disabled && onSelect(index);
  };

  return (
    <span className={classes} onClick={handleClick}>
      {label}
    </span>
  );
};

export default TabNav;

import classNames from "classnames";
import React, { FC, memo, useContext } from "react";
import { TabContext } from "./Tabs";

export interface TabItemProp {
  index?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  label: any;
  key?: string;
}

const TabItem: FC<TabItemProp> = (props) => {
  const { index, className, style, disabled, children, label } = props;
  const context = useContext(TabContext);
  const { activeIndex, onSelect, type } = context;

  const classes = classNames("tab-item", className, {
    "is-active": index === activeIndex,
    "is-disabled": disabled,
  });

  const handleClick = () => {
    onSelect && !disabled && index && onSelect(index);
  };

  return (
    <div className={classes} onClick={handleClick}>
      {/* <div className={`tab-label tab-${type}-label`}>{label}</div> */}
      <div className="tab-item-content">{children}</div>
    </div>
  );
};

TabItem.defaultProps = {
  disabled: false,
};
TabItem.displayName = "TabItem";

export default TabItem;

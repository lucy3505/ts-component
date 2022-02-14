import React, { FC, memo, useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import { MenuItemProp } from "./MenuItem";

interface SubMenuProp {
  title: string;
  index?: string;
  className?: string;
  children: React.ReactNode;
}

const SubMenu: FC<SubMenuProp> = (props) => {
  const { title, index, className, children } = props;
  const context = useContext(MenuContext);
  const { activeIndex, onSelect, defaultSubMenus, mode } = context;
  const isOpend =
    index && mode === "vertical" ? defaultSubMenus?.includes(index) : false;
  debugger;
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": index === activeIndex,
  });
  const [open, setOpen] = useState(isOpend);
  const renderChildren = () => {
    const classes = classNames("viking-submenu", {
      "menu-opened": open,
    });
    const childrenComponent = React.Children.map(children, (child, idx) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProp>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${idx.toString()}`,
        });
      } else {
        console.log("warn");
      }
    });

    return <ul className={classes}>{childrenComponent}</ul>;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!open);
    onSelect && index && onSelect(index);
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === "vertical" ? { onClick: handleClick } : {};

  const hoverEvent =
    context.mode === "horizontal"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  return (
    <li className={classes} key={index} {...hoverEvent}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";

export default SubMenu;

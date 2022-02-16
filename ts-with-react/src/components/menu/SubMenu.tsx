import React, { FC, memo, useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import { MenuItemProp } from "./MenuItem";
import Icon from "../Icon";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { CSSTransition } from "react-transition-group";
import Transition from "../transition/Transition";
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

  const [open, setOpen] = useState(isOpend);
  const classes = classNames("menu-item submenu-item", className, {
    "is-active": index === activeIndex,
    "is-opened": open,
    "is-vertical": context.mode === "vertical",
  });
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

    return (
      <Transition
        // classNames="zoom-in-top"
        appear
        in={open}
        timeout={300}
      >
        <ul className={classes}>{childrenComponent}</ul>
      </Transition>
    );
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
        <Icon icon={solid("angle-down")} className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";

export default SubMenu;

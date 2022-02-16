import React, { createContext, FC, memo, useEffect, useState } from "react";
import { SmileTwoTone } from "@ant-design/icons";
import { TabItemProp } from "./TabPane";
import TabItem from "./TabPane";

import classNames from "classnames";
import TabNav, { TabNavProp } from "./TabNav";
type TabType = "line" | "card" | "editable-card";
interface TabsProp {
  defaultIndex?: string;
  type?: TabType;
  className?: string;
  onChange?: (selectIndex: string) => void;
  style?: React.CSSProperties;
  activeIndex?: string;
}

export interface TabContextProp {
  activeIndex?: string;
  onSelect?: (selectIndex: string) => void;
  type: TabType;
}

export const TabContext = createContext<TabContextProp>({
  activeIndex: "0",
  type: "line",
});

const Tabs: FC<TabsProp> = (props) => {
  const {
    defaultIndex,
    type,
    className,
    onChange,
    children,
    activeIndex: activeIdx,
  } = props;
  const [activeIndex, setActiveIndex] = useState(
    activeIdx || defaultIndex || "0"
  );
  const classes = classNames("viking-tabs", className, {
    [`tab-${type}`]: type,
  });
  const handleClick = (index: string) => {
    // alert(index);
    if (index === "tab-add") {
      const childrenElement = children as Array<
        React.FunctionComponentElement<TabItemProp>
      >;
      childrenElement?.push(
        <TabItem label={"new item"} index={`tab-${childrenElement.length + 1}`}>
          new tab content
        </TabItem>
      );
      setActiveIndex(`tab-add`);
    } else {
      onChange && onChange(index);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (activeIndex === "tab-add") {
      debugger;
      const childrenElement = children as Array<
        React.FunctionComponentElement<TabItemProp>
      >;
      setActiveIndex(`tab-${childrenElement.length}`);
    }
  }, [activeIndex]);

  const passedContext = {
    activeIndex: activeIndex,
    onSelect: handleClick,
    type: type || "line",
  };

  const renderChildren = () =>
    React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProp>;
      const { displayName } = childElement.type;

      if (displayName === "TabItem") {
        return React.cloneElement(childElement, {
          index: index.toString(),
          ...childElement.props,
        });
      } else {
        console.log("warn");
      }
    });

  const renderNav = () => {
    let navs = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabNavProp>;
      return <TabNav {...childElement.props} />;
    });

    if (type === "editable-card") {
      navs?.push(<TabNav label="+" index="tab-add" />);
    }
    return navs;
  };

  return (
    <TabContext.Provider value={passedContext}>
      <div className="viking-tab">
        <nav className="tab-nav">{renderNav()}</nav>
        <div className={classes}>{renderChildren()}</div>
      </div>
    </TabContext.Provider>
  );
};

Tabs.defaultProps = {
  defaultIndex: "0",
  type: "editable-card",
  // type: "card",
};

export default Tabs;

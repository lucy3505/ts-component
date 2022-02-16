import React, { useState } from "react";
import Tabs from "./components/Tab/Tabs";
import TabItem from "./components/Tab/TabPane";
import Icon from "@ant-design/icons";
import { StarOutlined } from "@ant-design/icons";
import { SmileTwoTone } from "@ant-design/icons";
import Button from "./components/Button";
import AntTab from "./components/antTab";

function App() {
  const defaultTabs = [
    { label: "tab1", key: `tab-1`, content: `  this is content 1` },
    { label: "tab2", key: "tab-2", content: `  this is content 2` },
  ];
  const [tabs, setTabs] = useState(defaultTabs);
  const handleChange = () => {};

  const handleAdd = () => {
    debugger;
    setTabs([
      ...tabs,
      { label: "newTab", key: `tab-${tabs.length + 1}`, content: `` },
    ]);
  };

  return (
    <div className="App">
      <AntTab />
      <Button
        onClick={() => {
          debugger;
          handleAdd();
        }}
      >
        Add
      </Button>
      <Tabs activeIndex="tab-1" onChange={handleChange}>
        {tabs.map((tab, index) => {
          return (
            <TabItem label={tab.label} index={tab.key} key={tab.key}>
              {tab.content}
            </TabItem>
          );
        })}
      </Tabs>
    </div>
  );
}

export default App;

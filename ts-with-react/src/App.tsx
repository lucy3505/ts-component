import React, { useState } from "react";

import AntTab from "./components/antTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import Icon from "./components/Icon";
import Menu from "./components/menu/Menu";
import MenuItem from "./components/menu/MenuItem";
import SubMenu from "./components/menu/SubMenu";
import Button from "./components/Button";
import Transition from "./components/transition/Transition";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <Icon icon={regular("bell")} theme="primary" size="10x" /> */}
      {/* // <FontAwesomeIcon icon={brands("twitter")} /> */}
      <Button
        size="lg"
        onClick={() => {
          setShow(!show);
        }}
      >
        toogle
      </Button>
      {/* <Transition in={show} timeout={300}></Transition> */}
      <Transition in={show} timeout={300} wrapper={true}>
        <Button btnType="primary">btn</Button>
      </Transition>
      {/* 
      <Menu>
        <MenuItem>11</MenuItem>
        <MenuItem>22</MenuItem>
        <SubMenu title="33">
          <MenuItem>33</MenuItem>
        </SubMenu>
      </Menu> */}
    </div>
  );
}

export default App;

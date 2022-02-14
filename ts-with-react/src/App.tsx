import React from "react";
import MenuItem from "./components/menu/MenuItem";
import Menu from "./components/menu/Menu";
import "./styles/index.scss";
import SubMenu from "./components/menu/SubMenu";
function App() {
  return (
    <div className="App">
      <Menu onSelect={(index) => {}} defaultSubMenus={["2"]}>
        <MenuItem>11</MenuItem>
        <MenuItem disabled>33</MenuItem>
        <SubMenu title="44">
          <MenuItem>11</MenuItem>
          <MenuItem>2</MenuItem>
        </SubMenu>
        <SubMenu title="33">
          <MenuItem>11</MenuItem>
          <MenuItem>2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;

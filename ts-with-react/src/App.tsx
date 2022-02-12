import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button";
import "./styles/index.scss";
function App() {
  return (
    <div className="App">
      <Button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        default button
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        primary button
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        danger button
      </Button>
      <Button btnType={ButtonType.Link} href="11">
        link
      </Button>
      <Button btnType={ButtonType.Link} disabled href="11" target="_blank">
        link disabled
      </Button>
      <Button btnType={ButtonType.Danger} disabled>
        danger
      </Button>
    </div>
  );
}

export default App;

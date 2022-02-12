import React, { memo } from "react";
import useLocalStorage from "@rehooks/local-storage";

const LocalStorage = memo(() => {
  const localStorage = useLocalStorage();
  console.log(localStorage);
  return <div>LocalStorage</div>;
});

export default LocalStorage;

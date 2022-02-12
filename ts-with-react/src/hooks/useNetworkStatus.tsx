import { useState, useEffect } from "react";

function getConnection() {
  return navigator.connection;
}

function useNetworkStatus() {
  debugger;
  let [connection, updateNetworkConnection] = useState(getConnection());

  function updateConnectionStatus() {
    updateNetworkConnection(getConnection());
  }
  useEffect(() => {
    connection.addEventListener("change", updateConnectionStatus);
    return () => {
      connection.removeEventListener("change", updateConnectionStatus);
    };
  });

  return connection;
}

export default useNetworkStatus;

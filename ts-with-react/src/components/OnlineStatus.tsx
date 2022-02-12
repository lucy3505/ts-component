import useOnlineStatus from "@rehooks/online-status";
import useNetworkStatus from "../hooks/useNetworkStatus";

function OnlineStatus() {
  const onlineStatue = useOnlineStatus();
  const connect = useNetworkStatus();
  console.log(connect);
  return (
    <div>
      {/* <div>downlink: {connect.downlink}</div> */}
      <div>{`you are ${onlineStatue ? "online" : "offline"}`}</div>
    </div>
  );
}

export default OnlineStatus;

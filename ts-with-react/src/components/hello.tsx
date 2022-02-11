import React, { memo } from "react";

interface IHelloProps {
  message?: string;
}

const Hello: React.FC<IHelloProps> = memo((props) => {
  return <div>{props.message}</div>;
});
Hello.defaultProps = {
  message: "hello world",
};

export default Hello;

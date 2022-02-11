import React, { memo, FC } from "react";
import withLoader from "./withLoader";

interface IShowResult {
  message: string;
  status: string;
}

const DogShow: FC<{ data: IShowResult }> = ({ data }) => {
  return (
    <div>
      <h2>Dog show:{data.status}</h2>

      <img src={data.message} />
    </div>
  );
};

export default withLoader(
  memo(DogShow),
  // "http://dog.ceo/api/breeds/image/random"
  "http://127.0.0.1:4003"
);

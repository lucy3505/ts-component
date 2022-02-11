import useUrlLoader from "./../hooks/useUrlLoader";
import React, { memo, FC, useEffect, useState } from "react";
import withLoader from "./withLoader";

interface IShowResult {
  message: string;
  status: string;
}

const DogShow2: FC = () => {
  const [random, setRandom] = useState(false);
  const [isLoading, data] = useUrlLoader("http://127.0.0.1:4003", [random]);
  const dogResult = data as IShowResult;

  return (
    <>
      <button onClick={() => setRandom(!random)}>change dog</button>
      {isLoading ? (
        " loading"
      ) : (
        <div>
          <h2>Dog show:{data.status}</h2>

          <img src={data.message} />
        </div>
      )}
    </>
  );
};

export default memo(DogShow2);

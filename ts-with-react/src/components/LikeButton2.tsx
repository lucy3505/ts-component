import React, { memo, useEffect, useRef, useState } from "react";

const LikeButton: React.FC = memo(() => {
  // const [like, setLike] = useState(0);
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("document title is running");
    document.title = `点击了${like}次`;
  }, [like]);

  const handleAlert = () => {
    setTimeout(() => {
      alert(`点击了${like}次`); //这里3秒内继续点击like的话只会获取之前的like次数
    }, 3000);
  };
  const handleAlert2 = () => {
    setTimeout(() => {
      alert(`点击了${likeRef.current}次`); //
    }, 3000);
  };

  //想在只有组件更新的时候再有操作怎么办
  useEffect(() => {
    if (didMountRef.current) {
      console.log("this is updated");
    } else {
      didMountRef.current = true;
    }
  });
  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus();
    }
  });
  return (
    <>
      <input ref={domRef} type="text" />
      <button
        onClick={() => {
          setLike(like + 1);
          likeRef.current++; //修改ref值是不会引发渲染
        }}
      >
        {like}赞
      </button>
      <button onClick={handleAlert}>alert</button>
      <button onClick={handleAlert2}>alert2</button>
    </>
  );
});

export default LikeButton;

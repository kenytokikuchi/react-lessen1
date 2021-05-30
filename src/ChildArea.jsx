import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo以下はpropsが更新されるたび再レンダリングするようにする。それ以外は再レンダリングしない。ChildAreaはpropsのみで再レンダリングする
// 肥大化するコンポーネントはmemoで囲うようにすると無駄な処理が走らなくなる
// ただ、新しく関数を定義するとmemo化しても再レンダリングされてしまう
// 新しく関数を作成した場合はuseCallbackを使用するとmemo化したことになる
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChidAreaがレンダリングされた!!");

  const data = [...Array(200).keys()];
  data.forEach(() => {
    console.log(data);
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

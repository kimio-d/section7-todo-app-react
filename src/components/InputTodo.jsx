import React from "react";

const style = {
  backgroundColor: "#c1fff2",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabledFlag } = props;
  return (
    <div style={style} className="input-area">
      <input
        disabled={disabledFlag}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabledFlag} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

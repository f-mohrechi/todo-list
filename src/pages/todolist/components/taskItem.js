import React from "react";

export const TaskItem = (props) => {
  const { handleModalUpdate, handleRemoveTodo, handleUpdateTodo } = props;

  return (
    <div
      key={props.data.id}
      className="grid grid-cols-12 gap-x-5 py-3 row-table"
    >
      <div className="col-span-1">
        <p>1</p>
      </div>

      <div className="col-span-2">
        <p>{props.data.category}</p>
      </div>

      <div className="col-span-5">
        <p>{props.data.text}</p>
      </div>

      <div className="col-span-1 text-center">
        <input
          onClick={() => handleUpdateTodo(props.data.id)}
          type="checkbox"
          id="cbx"
          checked={props.data.status}
          style={{}}
        />
        {/* <label for="cbx" className="check">
          <svg width="22px" height="22px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label> */}
      </div>

      <div
        className="col-span-1 text-center"
        onClick={() => {
          console.log(props.data);
        }}
      >
        <img
          onClick={() => handleModalUpdate(props.data)}
          src="/img/edit.svg"
        />
      </div>

      <div className="col-span-1 text-center">
        <img
          onClick={() => handleRemoveTodo(props.data.id)}
          src="/img/trash.svg"
        />
      </div>
    </div>
  );
};

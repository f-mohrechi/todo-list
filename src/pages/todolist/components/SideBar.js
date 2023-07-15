import React from "react";

export const SideBar = (props) => {
  return (
    <div className="white-bg flex flex-col justify-between items-center">
      <div className="pt-4 flex flex-col justify-center items-center ">
        <div className="">
          <button className="main-btn">all categories</button>
        </div>

        <div className="flex flex-col items-center mt-4">
          {props.data &&
            props.data.map((item) => {
              return <button className="tasks-btn">{item.category}</button>;
            })}
        </div>
      </div>
    </div>
  );
};

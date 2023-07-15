import React from "react";

export const HeadRow = () => {
  return (
    <div className="grid grid-cols-12 gap-x-5 pb-2 row-table">
      <div className="col-span-1">
        <p className="font-semibold">#</p>
      </div>

      <div className="col-span-2">
        <p className="font-semibold">category</p>
      </div>

      <div className="col-span-5">
        <p className="font-semibold">task</p>
      </div>

      <div className="col-span-1 text-center">
        <p className="font-semibold">status</p>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
    </div>
  );
};

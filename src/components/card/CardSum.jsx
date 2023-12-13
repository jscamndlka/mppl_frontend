import React from "react";

const CardSum = ({ title, count }) => {
  return (
    <div className="shadow-xl card w-72 bg-base-100">
      <div className="card-body">
        <h2 className="text-gray-500 card-title">{title}</h2>
        <p className="text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default CardSum;

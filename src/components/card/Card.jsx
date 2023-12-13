import React from "react";

const Card = ({ title, duration }) => {
  return (
    <div className="shadow-xl card w-72 bg-base-100">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl font-bold">{duration} Jam</p>
      </div>
    </div>
  );
};

export default Card;

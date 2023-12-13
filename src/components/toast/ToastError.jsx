import React from "react";

const ToastError = ({ title }) => {
  return (
    <div className="toast toast-top toast-center">
      <div className="font-semibold text-center text-white alert alert-error">
        {title}
      </div>
    </div>
  );
};

export default ToastError;

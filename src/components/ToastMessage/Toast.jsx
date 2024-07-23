import React, { useEffect } from "react";
import { LuCheck, LuX } from "react-icons/lu";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    if (isShown) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isShown, onClose]);

  const isDelete = type === "delete";

  return (
    <div
      className={`absolute top-20 right-6 transition-all duration-500 ${
        isShown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="min-w-52 bg-white border shadow-2xl rounded-md flex overflow-hidden">
        <div 
          className={`w-1 ${isDelete ? "bg-red-500" : "bg-green-500"}`}
        ></div>
        <div className="flex items-center gap-3 py-2 px-4">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              isDelete ? "bg-red-100" : "bg-green-100"
            }`}
          >
            {isDelete ? (
              <LuX className="text-xl text-red-500" />
            ) : (
              <LuCheck className="text-xl text-green-500" />
            )}
          </div>
          <p className="text-md text-slate-800">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
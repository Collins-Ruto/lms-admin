import React, { useEffect, useState } from "react";

function StatusMsg({ status }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
      status.message && status.message !== "" && setShow(true);
      
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="fixed right-4 top-14 z-10">
      {show && (
        <div
          className={`opacity-80 ${
            status.type === "success"
              ? "bg-green-600 "
              : status.type === "error"
              ? "bg-red-500"
              : "bg-yellow-500"
          } text-white px-4 py-2`}
        >
          <div className="flex justify-between">
            {status.message}
            <img
              onClick={() => {
                setShow(false);
              }}
              className="w-6 ml-4 cursor-pointer"
              src="https://img.icons8.com/material-rounded/24/FFE6E6/multiply--v1.png"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default StatusMsg;

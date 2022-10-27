import React from 'react';
import { useRouteError } from "react-router-dom";
const ErrorElements = () => {
  const error = useRouteError();
  return (
    <div>
      <div className="flex flex-col min-h-[700px] justify-center items-center">
        <h1 className="text-4xl">Oops! An Error Occured!</h1>
        <br />
        {error && (
          <div>
            <p className="text-red-700 font-semibold">
              {error.statusText || error.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorElements;
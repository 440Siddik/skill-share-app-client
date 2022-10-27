import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CheckOut = () => {

  const Details = useLoaderData();
  const handleBuy = () => {
    toast.success("Wow so easy!");
  };
  const { name, img, rating, description } = Details;
  return (
    <div>
      <h1 className="text-center text-2xl text-blue-500 font-semibold my-4">
        Details About This Course
      </h1>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mx-auto">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p>{description}</p>
          </div>
          <p>Rating : {rating}</p>

          <button
            onClick={handleBuy}
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
          >
            Buy Now
          </button>
        </div>
      </div>
      <>
      <ToastContainer/>
      </>
    </div>
  );
};

export default CheckOut;

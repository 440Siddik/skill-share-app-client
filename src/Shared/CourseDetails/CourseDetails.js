import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CourseDetails = ({ category }) => {
  const {id, name, img, rating, description } = category;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>

            {description.length > 100 ? (
              <p>{description.slice(0, 40) + "..."}</p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <p>Rating : {rating}</p>
          <Link to={`/courses/${id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

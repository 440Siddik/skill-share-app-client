import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mx-auto my-4">
        <h1 className="text-2xl font-bold text-center">Signup With Email</h1>
        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Full name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Photo Url</label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              placeholder="Photo Url"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-xs dark:text-gray-400"></div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-violet-400">
            Sign up
          </button>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Already have an account?
            <Link to="/login" className="underline dark:text-gray-100">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React from 'react';

const Blog = () => {
  return (
    <div className='px-10'>
      <h1 className="text-center text-2xl text-blue-500 font-semibold my-2">
        Questions
      </h1>
      <div>
        <h3 className="text-xl font-medium">What is CORS?</h3>
        <p className="text-lg text-green-500 font-medium my-2">
          CORS stands for Cross-Origin Resource Sharing . It allows us to relax
          the security applied to an API. This is done by bypassing the
          Access-Control-Allow-Origin headers, which specify which origins can
          access the API
        </p>
        <h3 className="text-xl font-medium">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p className="text-lg text-green-500 font-medium my-2">
          The Firebase Realtime Database lets you build rich, collaborative
          applications by allowing secure access to the database directly from
          client-side code. Data is persisted locally, and even while offline,
          realtime events continue to fire, giving the end user a responsive
          experience.
          <div className="my-1">
            <p>
              MongoDB, Oracle Database, Amazon Redshift, DataStax Enterprise are
              the other options.
            </p>
          </div>
        </p>
        <h3 className="text-xl font-medium">
          How does the private route work?
        </h3>
        <p className="text-lg text-green-500 font-medium my-2">
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
        <h3 className="text-xl font-medium">
          What is Node? How does Node work?
        </h3>
        <p className="text-lg text-green-500 font-medium my-2">
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
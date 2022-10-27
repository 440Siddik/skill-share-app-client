import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="p-6 py-12 dark:bg-amber-200 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to 50% Off
            </h2>

            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free trial! Use code:</span>
              <span className="font-bold text-lg">SkillShare</span>
            </div>
            <Link
              to="/courses"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
      <div>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <a
              rel="noopener noreferrer"
              href="#"
              className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
            >
              <img
                src="https://miro.medium.com/max/720/0*a-6XePXYuq-YSGT0"
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                  Become Pro
                </h3>
                <span className="text-xs dark:text-gray-400">
                  February 19, 2021
                </span>
                <p>
                  Topics include basic concepts in web development using languages such as Js, React js, Node js,
                  Express js, Python and Php.
                </p>
              </div>
            </a>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    HTML
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 21, 2021
                  </span>
                  <p>
                    HTML (HyperText Markup Language) is the most basic building
                    block of the Web. It defines the meaning and structure of
                    web content. Other technologies besides HTML are generally
                    used to describe a web page's appearance/presentation (CSS)
                    or functionality/behavior (JavaScript).
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    CSS
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 22, 2022
                  </span>
                  <p>
                    What is CSS explain? Cascading Style Sheets (CSS) is a
                    stylesheet language used to describe the presentation of a
                    document written in HTML or XML (including XML dialects such
                    as SVG, MathML or XHTML). CSS describes how elements should
                    be rendered on screen, on paper, in speech, or on other
                    media.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    MONGODB
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 23, 2022
                  </span>
                  <p>
                    MongoDB is a non-relational document database that provides
                    support for JSON-like storage. The MongoDB database has a
                    flexible data model that enables you to store unstructured
                    data, and it provides full indexing support, and replication
                    with rich and intuitive APIs.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    ANGULAR JS
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 24, 2021
                  </span>
                  <p>
                    What Is AngularJS? AngularJS is a structural framework for
                    dynamic web apps. It lets you use HTML as your template
                    language and lets you extend HTML's syntax to express your
                    application's components clearly and succinctly.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    VUE JS
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 25, 2021
                  </span>
                  <p>
                    VueJS is an open source progressive JavaScript framework
                    used to develop interactive web interfaces. It is one of the
                    famous frameworks used to simplify web development. VueJS
                    focusses on the view layer. It can be easily integrated into
                    big projects for front-end development without any issues.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block"
              >
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    TAILWIND CSS
                  </h3>
                  <span className="text-xs dark:text-gray-400">
                    January 26, 2022
                  </span>
                  <p>
                    Tailwind CSS makes it quicker to write and maintain the code
                    of your application. By using this utility-first framework,
                    you don't have to write custom CSS to style your
                    application. Instead, you can use utility classes to control
                    the padding, margin, color, font, shadow, and more of your
                    application.
                  </p>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <Link
                to="/courses"
                type="button"
                className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
              >
                Click on our special courses...
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
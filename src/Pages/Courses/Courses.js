import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseDetails from "../CourseDetails/CourseDetails";

const Courses = () => {
 const [categories, setCategories] = useState([])
 useEffect(()=>{
  fetch("https://skill-share-app-server.vercel.app/course-categories")
    .then((res) => res.json())
    .then((data) => setCategories(data));
 },[]) 
 return (
   <div>
     <div className="grid grid-cols-2">
       <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
         <div className="flex items-center p-2 space-x-4">
           <h2 className="text-xl text-rose-500 mx-auto">
             Courses Quantity : {categories.length}
           </h2>
         </div>
         <div className="font-semibold text-2xl">
           {categories.map((category) => (
             <p key={category.id}>
               <Link to={`/courses/${category.id}`}>{category.name}</Link>
             </p>
           ))}
         </div>
       </div>
       <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
         {categories.map((category) => (
           <CourseDetails key={category.id} category={category}></CourseDetails>
         ))}
       </div>
     </div>
   </div>
 );
};

export default Courses;

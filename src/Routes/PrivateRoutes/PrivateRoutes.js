import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivateRoutes = ({children}) => {
const {user, loading} = useContext(AuthContext);
const location = useLocation();
if(loading){
  return (
    <div className="mx-[50%] my-10">
      <button type="button" class="bg-rose-500 rounded py-2 px-4" disabled>
        <p className='text-white'>Processing...</p>
      </button>
    </div>
  );
}
if(!user){
  return <Navigate to ='/login' state={{from : location}} replace/>
}
return children;
};

export default PrivateRoutes;
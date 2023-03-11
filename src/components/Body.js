import React from 'react';
import {Outlet} from "react-router-dom";
import ButtonList from './ButtonList';
import VideoList from './VideosList';

const Body = () => {
  return (
    <div className='w-full'>
        <Outlet />
    </div>
  )
}

export default Body;
import React from 'react';
import {Outlet} from "react-router-dom";
import ButtonList from './ButtonList';
import VideoList from './VideosList';

const Body = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Body;
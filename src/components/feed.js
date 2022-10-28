import React from 'react';
import "./css/feed.css";
import SabelotodoBox from './sabelotodoBox';
import Post from "./post";


function feed() {
  return (
    <div className='feed'>
      <SabelotodoBox/>
    </div>
  )
}

export default feed
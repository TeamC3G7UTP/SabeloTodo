import React from 'react';
import "./css/feed.css";
import SabelotodoBox from '../box/sabelotodoBox';
import Post from "../post/post";


function feed() {
  return (
    <div className='feed'>
      <SabelotodoBox/>
    </div>
  )
}

export default feed
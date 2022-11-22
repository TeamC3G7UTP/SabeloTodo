import React from 'react';
import "./Feed.css";
import { SabelotodoBox, Post } from '../index';


function Feed() {
  return (
    <div className='feed'>
      <SabelotodoBox />
      <Post />
    </div>
  )
}

export default Feed
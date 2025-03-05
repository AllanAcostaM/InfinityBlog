import React from 'react';
import Featured from '../featured/Featured';
import Post from '../post/Post';
import Category from '../categorySection/Category';


const Home = () => {

  return (
    <div>
      <Featured />
      <Post />
      <Category />
    </div>
  )
}

export default Home
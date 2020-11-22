import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div><Link to="/about">About</Link></div>
    <div><Link to="/users/1">Users</Link></div>
    <h2> Home </h2>
    <p> My awesome Home component </p>
  </div>
);

export default Home;
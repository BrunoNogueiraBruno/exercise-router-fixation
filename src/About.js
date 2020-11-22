import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <div><Link to="/">Voltar</Link></div>
    <div><Link to="/users/1">Users</Link></div>
    <h2>About</h2>
    <p> My awesome About component </p>
  </div>
);

export default About;
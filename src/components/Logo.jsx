import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="logo">
        <span>Editora MaujorTec</span>
      </h1>
    </Link>
  );
};
export default Logo;

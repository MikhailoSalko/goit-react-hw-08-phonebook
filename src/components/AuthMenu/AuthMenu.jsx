import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default AuthMenu;

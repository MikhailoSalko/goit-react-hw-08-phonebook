import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>

      <Outlet />
    </div>
  );
};

export default Layout;

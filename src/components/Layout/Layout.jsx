import { Container } from '@mui/material';

import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container maxWidth="sm">
      <header style={{ padding: '20px 0' }}>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/register">Registration</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </nav>
      </header>

      <Outlet />
    </Container>
  );
};

export default Layout;

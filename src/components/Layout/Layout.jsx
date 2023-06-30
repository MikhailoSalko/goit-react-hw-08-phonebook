import { Container } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectAuth } from 'redux/auth/auth-selectors';
import AuthMenu from 'components/AuthMenu/AuthMenu';

const Layout = () => {
  const isAuth = useSelector(selectAuth);

  return (
    <Container maxWidth="sm">
      <header style={{ padding: '20px 0' }}>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/">Home</NavLink>
          {!isAuth ? <AuthMenu /> : <UserMenu />}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;

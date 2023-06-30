import { AppBar, Container, Toolbar } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectAuth } from 'redux/auth/auth-selectors';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const isAuth = useSelector(selectAuth);

  return (
    <Container maxWidth="md" component="div" className="container">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <header>
        <AppBar component="nav" position="static">
          <Toolbar>
            <NavLink to="/">Home</NavLink>
            {!isAuth ? <AuthMenu /> : <UserMenu />}
          </Toolbar>
        </AppBar>
      </header>

      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;

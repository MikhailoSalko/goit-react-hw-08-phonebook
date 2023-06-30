import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectAuth } from 'redux/auth/auth-selectors';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  StyledApp,
  StyledContainer,
  StyledNavLink,
  StyledToolBar,
} from './StyledLayout';

const Layout = () => {
  const isAuth = useSelector(selectAuth);

  return (
    <StyledContainer maxWidth="md" component="div">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        theme="light"
      />

      <StyledApp position="static">
        <StyledToolBar>
          <StyledNavLink to="/">Home</StyledNavLink>
          {!isAuth ? <AuthMenu /> : <UserMenu />}
        </StyledToolBar>
      </StyledApp>

      <main>
        <StyledContainer>
          <Outlet />
        </StyledContainer>
      </main>
    </StyledContainer>
  );
};

export default Layout;

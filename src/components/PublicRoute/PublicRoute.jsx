import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectAuth);

  return !isAuth ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;

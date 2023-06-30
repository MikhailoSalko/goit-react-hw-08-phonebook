import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectAuth);

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

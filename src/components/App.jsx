import HomePage from 'pages/HomePage/HomePage';
import Layout from 'pages/Layout/Layout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage/ContactsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

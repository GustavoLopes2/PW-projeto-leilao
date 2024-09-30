import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import DefaultLayout from './components/DefaultLayout';
import SimpleLayout from './components/SimpleLayout';
import Cadastre from './pages/cadastre/Cadastre';
import RecoverPassword from './pages/recover-password/Recover-password';
import PrivateRoute from './components/private-route/Private-route';
import ChangePassword from './pages/change-password/Change-password';
import { useNavigate } from 'react-router-dom';

const AppRoutes = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <Routes>
      <Route path='/' element={
        <DefaultLayout 
          onProfileClick={handleProfileClick} 
          onLogoutClick={handleLogoutClick} 
        >
          <PrivateRoute element={<Home />} />
        </DefaultLayout>
      } />
      <Route path='/profile' element={<DefaultLayout><PrivateRoute element={<Profile />} /></DefaultLayout>} />
      <Route path='/login' element={<SimpleLayout><Login/></SimpleLayout>} />
      <Route path='/cadastre' element={<SimpleLayout><Cadastre/></SimpleLayout>} />
      <Route path='/change-password' element={<SimpleLayout><ChangePassword/></SimpleLayout>} />
      <Route path='/recover-password' element={<SimpleLayout><RecoverPassword/></SimpleLayout>} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

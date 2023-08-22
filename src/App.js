import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// components
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import HomeScreen from './screens/Home';
import MainLayout from './components/common/MainLayout';

const App = () => {


  const [userLogged, setUserLogged] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setUserLogged(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setUserLogged(false);
  };

  console.log('userLogged', userLogged);
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Login handleLogin={handleLogin} loginError={loginError} />} />
          <Route
            path='/Home/*'
            element={userLogged ? <HomeScreen handleLogout={handleLogout} /> : <Navigate to='/' replace />}
          />
          <Route
            path='/testDashboard'
            element={<Dashboard handleLogout={handleLogout} />} />
          <Route path='/testHome' element={<MainLayout handleLogout={handleLogout} />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;



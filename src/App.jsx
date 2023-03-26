import React, { useEffect } from 'react';
import './App.css';
import { auth } from './Firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import {
  setLogin,
  setLogout,
  selectUser,
} from './redux_app/features/UserSlice';
import LoginScreen from './pages/Login/LoginPage';
import HomePage from './pages/Home/HomePage';
import ProfilPage from './pages/Profil/ProfilPage';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Logged In
        console.log(user);
        dispatch(
          setLogin({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        //Logged Out
        dispatch(setLogout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<ProfilPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

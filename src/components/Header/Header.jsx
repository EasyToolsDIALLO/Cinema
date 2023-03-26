import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderStyle.css';
import ProfilLogo from '../../assets/ousmane.jpg';
import { Link } from 'react-router-dom';

function Header() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleVisibility = () => {
    if (window.scrollY > 100) setVisible(true);
    else setVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibility);
    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  return (
    <div className={`nav ${visible && 'nav__bar'}`}>
      <div className="header">
        <img
          onClick={() => navigate('/')}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="NetFlixLog"
          className="header__logo"
        />

        <img
          onClick={() => navigate('/profil')}
          src={ProfilLogo}
          alt="ProfilLogo"
          className="header__profil"
        />
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import Header from '../../components/Header/Header';
import './ProfilPage.css';
import { FaUserAlt } from 'react-icons/fa';
import { selectUser } from '../../redux_app/features/UserSlice';
import { useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';

const ProfilPage = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profil">
      <Header />

      <div className="profil_body">
        <h1>Edit profil</h1>
        <div className="profil_infos">
          <div className="profil_image">
            <FaUserAlt size={50} color="#fff" />
          </div>
          <div className="profil_details">
            <h3>{user.email}</h3>
            <div className="profil_plans">
              <h3>Plans</h3>
              <button onClick={() => signOut(auth)} className="profil_signout">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;

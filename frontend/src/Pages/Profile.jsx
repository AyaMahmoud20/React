// Profile.jsx
import React from 'react';
import './Profile.css';
import profile from '../Components/Assets/samantha-cover-model-fashion-women-female.jpg'

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profile} alt="Profile" className="profile-photo" />
        <h2>Aya Mahmoud</h2>
      </div>
      <div className="profile-info">
        <p>Name : Aya Mahmoud</p>
        <p>Email : Aya_Mahmoud@gmaiil.com</p>
        <p>Location : Cairo</p>
        <p>phone : 01234567891</p>
    
         
      </div>
      <div className="profile-actions">
        <button>Edit Profile</button>
        <button className="delete-account">Delete Account</button>
      </div>
    </div>
  );
};

export default Profile;

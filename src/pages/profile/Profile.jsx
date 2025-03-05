import { Link } from "react-router-dom";
import profileImage from "../../images/MyPicture.png";
import { IoMdCheckmarkCircle } from "react-icons/io";


import "../profile/Profile.css";

import { useState } from "react";
import { useEffect } from "react";



const Profile = () => {
  const [name, setName] = useState("Jossep Acosta");
  const [email, setEmail] = useState("allanacost.27@gmail.com");


    useEffect(() => {
      window.scroll(0, 0);
  
    
    }, []);

  return (
    <section className="profile">
      <div className="container profile_container">
        {/* PROFILE INFO */}

        <div className="profile_dashboard">
          <Link to="/dashboard" className="btn">
            View Dashboard
          </Link>
        </div>

        <div className="profile_img_update">
          <div className="profile_img">
            <img src={profileImage} alt="" />
          </div>

          <i>
          <IoMdCheckmarkCircle />

          </i>
        </div>

        {/* PROFILE NAME */}
        <div className="profile_nmae">
          <h2>Jossep Acosta</h2>
        </div>

        {/* FORM TO UPDATE USER PROFILE */}

        <form action="" className="form_control">
          {/* <div className="alert_message success">
            <p className="success">Registration successful. Please log in</p>
          </div> */}

          <input type="text" placeholder="Name" value={name} name="" id="" />
          <input type="email" placeholder="Email" value={email} name="" id="" />
          <input type="password" placeholder="Current password" name="" id="" />
          <input type="password" placeholder="New password" name="" id="" />
          <input
            type="password"
            placeholder="Confirm new password"
            name=""
            id=""
          />

          <button type="submit" className="btn">
            Update my details
          </button>
        </form>
      </div>
    </section>
  );
};

export default Profile;

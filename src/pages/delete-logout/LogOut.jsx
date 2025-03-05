import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../delete-logout/Delete-LogOut.css";



const LogOut = () => {
    useEffect(() => {
      window.scroll(0, 0);
  
     
    }, []);


  return (
    <section className="delete_logout">
      <h2>Log Out Successful</h2>

      <Link className="btn" to="/">Go Back Home</Link>
    </section>
  );
};

export default LogOut;

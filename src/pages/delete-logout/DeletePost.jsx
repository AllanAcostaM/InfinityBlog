import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../delete-logout/Delete-LogOut.css";

const DeletePost = () => {
    useEffect(() => {
      window.scroll(0, 0);
  
    }, []);

  return (
    <section className="delete_logout">
      <h2> Delete Successful</h2>

      <Link to="/" className="btn">
        Go Home
      </Link>
    </section>
  );
};

export default DeletePost;

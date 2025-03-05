import { Link } from "react-router-dom";
import { useEffect } from "react";



const SignIn = () => {

    useEffect(() => {
      window.scroll(0, 0);
  
     
    }, []);



  return (
    <section className="form_section log_in">
      <div className="container form_section_container">
        <h2>Login</h2>

        <form action="" className="form_control">
          <div className="alert_message success">
            <p className="success">Registration successful. Please login</p>
          </div>

          <input type="text" name="" id="" placeholder="Username or Email" />
          <input type="password" name="" id="" placeholder="Password"/>

          <Link className="btn">Login</Link>
        </form>



        <small>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default SignIn;

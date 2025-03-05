import { Link } from "react-router-dom";
import { useEffect } from "react";


const SignUp = () => {

    useEffect(() => {
      window.scroll(0, 0);
  
     
    }, []);


  return (
    <section className="form_section sign_up">
      <div className="container form_section_container">
        <h2>Sign Up</h2>

        <form action="" className="form_control">
          <div className="alert_message error">
            <p className="success">This is an error message</p>
          </div>
          <input type="text" placeholder="First Name" name="" id="" />
          <input type="text" placeholder="Last Name" name="" id="" />
          <input type="text" placeholder="Username" name="" id="" />
          <input type="email" placeholder="Email" name="" id="" />
          <input type="password" placeholder="Create password" name="" id="" />
          <input type="password" placeholder="Confirm password" name="" id="" />

          <div className="cho_pic">
            <label htmlFor="cho_pic">Upload your picture</label>
            <input type="file" name="" id="cho_pic" />
          </div>

          <Link className="btn">Register</Link>
        </form>

        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </div>
    </section>
  );
};

export default SignUp;

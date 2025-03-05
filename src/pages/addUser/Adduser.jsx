import { Link } from "react-router-dom";
import { useEffect } from "react";


const AddCategory = () => {

    useEffect(() => {
      window.scroll(0, 0);
  
    
    }, []);


  return (
    <section className="form_section">
      <div className="container form_section_container">
        <h2>Add User</h2>

        <form action="" className="form_control">
          <div className="alert_message error">
            <p className="success">This is an error message</p>
          </div>

          <input type="text" name="" id="" placeholder="First Name" />
          <input type="text" name="" id="" placeholder="Username" />

          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />

          <input type="password" name="" id="" placeholder="Confirm password" />

          <p>User Role</p>
          <select name="" id="">
            <option value="">Author</option>
            <option value="">Admin</option>
          </select>

          <div className="cho_pic">
            <label htmlFor="cho_pic">User Avatar</label>
            <input type="file" name="" id="cho_pic" />
          </div>

          <Link className="btn">Add</Link>
        </form>

        <small>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default AddCategory;

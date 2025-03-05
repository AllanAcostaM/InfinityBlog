import { Link } from "react-router-dom";
import { useEffect } from "react";


const AddCategory = () => {

    useEffect(() => {
      window.scroll(0, 0);
  
    
    }, []);


  return (
    <section className="form_section">
      <div className="container form_section_container">
        <h2>Edit User</h2>

        <form action="" className="form_control">
          <input type="text" name="" id="" placeholder="First Name" />
          <input type="text" name="" id="" placeholder="Last Name" />
          <p>User Role</p>
          <select name="" id="">
            <option value="">Author</option>
            <option value="">Admin</option>
          </select>

          <Link className="btn">Update</Link>
        </form>

        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </div>
    </section>
  );
};

export default AddCategory;

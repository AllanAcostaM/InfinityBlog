import { Link } from "react-router-dom";
import { useEffect } from "react";


const AddCategory = () => {

    useEffect(() => {
      window.scroll(0, 0);
  
    
    }, []);

  return (
    <section className="form_section">
      <div className="container form_section_container">
        <h2>Edit Category</h2>

        <form action="" className="form_control">
          <input type="text" name="" id="" placeholder="Title" />
          <textarea placeholder="Description" name="" rows="4" id=""></textarea>

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

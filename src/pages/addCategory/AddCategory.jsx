import { Link } from "react-router-dom";
import { useEffect } from "react";


const AddCategory = () => {
    useEffect(() => {
      window.scroll(0, 0);
  
   
    }, []);

  return (
    <section className="form_section">
      <div className="container form_section_container">
        <h2>Add Category</h2>

        <form action="" className="form_control">
        <div className="alert_message error">
            <p className="success">This is an error message</p>
          </div>

          <input type="text" name="" id="" placeholder="Title" />
          <textarea placeholder="Description" name="" rows="4" id=""></textarea>

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

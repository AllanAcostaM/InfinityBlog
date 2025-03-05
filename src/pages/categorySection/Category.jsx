import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../categorySection/Category.css";


const Category = () => {
    useEffect(() => {
      window.scroll(0, 0);
    }, []);


  return (
    <div className="category_section">
      <div className="container category_section_container">
        <div className="category_section_btns">
          <Link to="/category" className="category_section_btn">
            Web Development
          </Link>

          <Link to="/category" className="category_section_btn">
            Science And Technology
          </Link>
          <Link to="/category" className="category_section_btn">
            Fullstack Development
          </Link>
          <Link to="/category" className="category_section_btn">
            Entertainment
          </Link>
          <Link to="/category" className="category_section_btn">
            Software Development
          </Link>
          <Link to="/category" className="category_section_btn">
            Backend Development
          </Link>
          <Link to="/category" className="category_section_btn">
            Programming
          </Link>
          <Link to="/category" className="category_section_btn">
            Frontend Development
          </Link>
          <Link to="/category" className="category_section_btn">
            Sports
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;

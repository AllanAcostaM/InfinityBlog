import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../addPost/AddPost.css";



const AddPost = () => {

    useEffect(() => {
      window.scroll(0, 0);
  
   
    }, []);


const [category, setCategory] = useState("Uncategorized");
const [description, setDescription] = useState("");
const [thumbnail, setThumbnail] = useState("");

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4 ,5, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ]
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

const POST_CATEGORIES = ["Agriculture", "Business", "Education", "Entertainment", "Art", "Investment", "Uncategorized", "Other"];


  return (
    <section className="form_section create_post">
      <div className="container form_section_container">
        <h2>Add Post</h2>

        <form action="" className="form_control">
        <div className="alert_message error">
            <p className="success">This is an error message</p>
          </div>
          <input type="text" name="" id="" placeholder="Title" />


          <p>Category</p>
          <select name="" id="">
            
              {
                POST_CATEGORIES.map(option => {
                  return (
                    <option key={option}>{option}</option>
                  )
                })
              }
                
              
            
          
          </select>
          <ReactQuill theme="snow" value={description} onChange={setDescription} modules={modules} formats={formats} />


          {/* <textarea name="" rows="5" id="" placeholder="Body"></textarea> */}

          <div className="addpost_checkbox">
            <input type="checkbox" name="" id="featured_check" />
            <label htmlFor="featured_check">Featured</label>
          </div>

          <div className="cho_pic">
            <label htmlFor="cho_pic">Upload a picture</label>
            <input type="file" name="" id="cho_pic" />
          </div>

          <Link to="/" className="btn">
            Add
          </Link>
        </form>

        <small>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </small>
      </div>
    </section>
  );
};

export default AddPost;

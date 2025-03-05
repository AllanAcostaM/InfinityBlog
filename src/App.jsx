import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";

{
  /* ADD / EDIT CATEGORY */
}

import AddCategory from "./pages/categoryPage/CategoryPage";
import EditCategory from "./pages/editCategory/EditCategory";

{
  /* ADD / EDIT POST */
}

import AddPost from "./pages/addPost/AddPost";
import EditPost from "./pages/editPost/EditPost";

{
  /* ADD / EDIT USER */
}

import Adduser from "./pages/addUser/Adduser";
import EditUser from "./pages/editUser/EditUser";

//
import Authors from "./pages/authors/Authors";
import Category from "./pages/categorySection/Category";
import CategoryPage from "./pages/categoryPage/CategoryPage";

import Dashboard from "./pages/Dashboard/Dashboard";
import ManageCategory from "./pages/manageCategory/ManageCategory";
import ManageUser from "./pages/manageUser/ManageUser";

import LogOut from "./pages/delete-logout/LogOut";
import PostDetail from "./pages/postDetail/PostDetail";
import PostItem from "./pages/post/PostItem";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Blog from "./pages/blog/Blog";
import DeletePost from "./pages/delete-logout/DeletePost";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import CreatePost from "./pages/createPost/CreatePost";
import AuthorsPost from "./pages/authors/AuthorsPost";
import { useEffect } from "react";
import FeaturedDetail from "./pages/featured/FeaturedDetail";

const App = () => {
 

  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* ADD / EDIT CATEGORY */}
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/editcategory" element={<EditCategory />} />

        {/* ADD / EDIT POST */}

        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost" element={<EditPost />} />

        {/* ADD / EDIT USER */}

        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser" element={<EditUser />} />

        {/* MANAGEMENT */}

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/managecategory" element={<ManageCategory />} />
        <Route path="/manageuser" element={<ManageUser />} />

        {/*  */}

        <Route path="/createpost" element={<CreatePost />} />

        <Route path="/authors" element={<Authors />} />
        <Route path="/authorspost" element={<AuthorsPost />} />

        <Route path="/category" element={<CategoryPage />} />
        <Route path="*" element={<Category />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/delete" element={<DeletePost />} />

        <Route path="/postdetail" element={<PostDetail />} />
        <Route path="/featureddetail" element={<FeaturedDetail />} />


        <Route path="*" element={<PostItem />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

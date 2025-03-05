import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaPenAlt } from "react-icons/fa";
import { FaBabyCarriage } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaEdit } from "react-icons/fa";
import { TiThList } from "react-icons/ti";
import { useEffect } from "react";


const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
      window.scroll(0, 0);
  
     
    }, []);


  const actionSidebar = () => {
    setShowSidebar(() => !showSidebar);
  };

  return (
    <section className="dashboard">
      <i className="sidebar" onClick={actionSidebar}>
        {/*  */}
        {showSidebar ? <FaChevronRight /> : <FaChevronLeft />}
      </i>

      <div className="container dashboard_container">
        <aside className={showSidebar ? "aside" : "no_side"}>
          <ul>
            <li>
              <Link to="/addpost">
                <i>
                  <FaPenAlt />
                </i>
                <h4>Add Post</h4>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="active">
                <i>
                  <FaBabyCarriage />
                </i>

                <h4>Manage Post</h4>
              </Link>
            </li>
            <li>
              <Link to="/adduser">
                <i>
                  <FaUserPlus />
                </i>
                <h4>Add User</h4>
              </Link>
            </li>
            <li>
              <Link to="/manageuser">
                <i>
                  <HiUsers />
                </i>
                <h4>Manage User</h4>
              </Link>
            </li>
            <li>
              <Link to="/addcategory">
                <i>
                  <FaEdit />
                </i>
                <h4>Add Category</h4>
              </Link>
            </li>
            <li>
              <Link to="/managecategory">
                <i>
                  <TiThList />
                </i>
                <h4>Manage Category</h4>
              </Link>
            </li>
          </ul>
        </aside>

        <main>
          <h2>Manage Posts</h2>

          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipis. Perferendis,
                  voluptatum.
                </td>
                <td>Music</td>
                <td>
                  <Link to="/editpost" className="btn sm">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to="/delete" className="btn sm danger">
                    Delete
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipis. Perferendis,
                  voluptatum.
                </td>
                <td>Food</td>
                <td>
                  <Link to="/editpost" className="btn sm">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to="/delete" className="btn sm danger">
                    Delete
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  Lorem ipsum dolor sit amet consectetur adipis. Perferendis,
                  voluptatum.
                </td>
                <td>Sport</td>
                <td>
                  <Link to="/editpost" className="btn sm">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to="/delete" className="btn sm danger">
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;

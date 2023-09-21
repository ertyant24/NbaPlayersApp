import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

function BlogList() {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios.get("https://64e5fa9609e64530d17f608f.mockapi.io/api/v1/blog/react_project")
      .then((response) => {
        console.log(response.data);
        setBlogData(response.data);
      })
      .catch((err) => {
        console.log(`Error Message: ${err}`);
      })
  }, [])

  const deleteAllBlog = () => {
    setBlogData(blogData.filter((del) => del.header = ""));
  };

  const deleteBlog = (id) => {
    // No delete in DB
    // setBlogData(blogData.filter((del) => del.id != id));

    let result = window.confirm(`Are you sure delete this blog ?`);
    if (result) {
      // delete in DB
      axios.delete(`https://64e5fa9609e64530d17f608f.mockapi.io/api/v1/blog/react_project/${id}`)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            setBlogData(blogData.filter((del) => del.id != id));
            toastr.error('Delete this blog', `${response.data.header}`);
          }
        })
        .catch((err) => {
          console.log(`Error Message: ${err}`)
        })
    }
    else{
      toastr.error(`Not deleted this blog`);
    }

  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className='text-center text-primary fw-bold'>Blog List</h1>
          </div><hr />
          <div className='text-end mt-3 mb-5'>
            <Link onClick={deleteAllBlog} className='btn btn-danger me-3'>
              All Blog Delete
            </Link>
            <Link to="/blog/create" className='btn btn-primary'>
              Add Blog
            </Link>
          </div>
          <div className='col-12'>
            <div className='table-responsive'>
              <table className="table table-dark table-striped table-hover text-center align-middle" style={{ fontFamily: "cursive", fontSize: "1.1rem"}}>
                <thead>
                  <tr>
                    <th>Blog Id</th>
                    <th>Photo</th>
                    <th>Header</th>
                    <th>Content</th>
                    <th>Update</th>
                    <th>View</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    blogData.map((blog) => (
                      <tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>
                          <img src={blog.avatar} alt="blog_avatar" width="100px" />
                        </td>
                        <td>{blog.header}</td>
                        <td>{blog.content}</td>
                        <td>
                          <Link to={`/blog/update/${blog.id}`}>
                            <i
                              style={{ cursor: "pointer", fontSize: "1.5rem" }}
                              className="fa-solid fa-pen-to-square text-success"
                            >
                            </i>
                          </Link>
                        </td>
                        <td>
                          <Link to={`/blog/view/${blog.id}`}>
                            <i
                              style={{ cursor: "pointer", fontSize: "1.5rem" }}
                              className="fa-solid fa-eye text-info"
                            >
                            </i>
                          </Link>
                        </td>
                        <td>
                          <Link onClick={() => deleteBlog(blog.id)}>
                            <i
                              style={{ cursor: "pointer", fontSize: "1.5rem" }}
                              className="fa-solid fa-user-minus text-danger"
                            >
                            </i>
                          </Link>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BlogList

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className='text-center text-primary fw-bold'>Blog List</h1>
          </div><hr />
          <div className='text-end mt-3 mb-5'>
            <Link className='btn btn-danger me-3'>
              All Blog Delete
            </Link>
            <Link to="/blog/create" className='btn btn-primary'>
              Add Blog
            </Link>
          </div>
          <div className='col-12'>
            <div class="table-responsive">
              <table class="table table-dark table-striped table-hover text-center align-middle" style={{fontSize: "1.25rem", fontFamily: "cursive"}}>
                <thead>
                  <tr>
                    <th scope="col">Blog Id</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Header</th>
                    <th scope="col">Content</th>
                    <th scope="col">Update</th>
                    <th scope="col">View</th>
                    <th scope="col">Delete</th>
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
                          <i
                            style={{ cursor: "pointer" }}
                            className="fa-solid fa-pen-to-square"
                          >
                          </i>
                        </td>
                        <td>
                          <i
                            style={{ cursor: "pointer" }}
                            className="fa-solid fa-eye"
                          >
                          </i>
                        </td>
                        <td>
                          <i
                            style={{ cursor: "pointer" }}
                            className="fa-solid fa-user-minus"
                          >
                          </i>
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

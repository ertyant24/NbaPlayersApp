import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function BlogView() {

  const { id } = useParams();
  console.log(`viewId: ${id}`);

  const [blogDto, setBlogDto] = useState([]);

  useEffect(() => {
    axios.get(`https://64e5fa9609e64530d17f608f.mockapi.io/api/v1/blog/react_project/${id}`)
      .then((response) => {
        console.log(response);
        setBlogDto(response.data);
      })
      .catch((err) => {
        console.log(`Error Message: ${err}`);
      })
  }, [])

  console.log(blogDto)

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 offset-3 d-flex justify-content-center">
            <div className="card" style={{ width: "400px" }}>
              <img className="card-img-top" src={blogDto.avatar} alt={blogDto.header} />
              <div className="card-body">
                <div className='mb-3'>
                  {blogDto.createdAt ? blogDto.createdAt.substring(0, 13) : ""}
                </div>
                <h4 className="card-title text-center">{blogDto.header ? blogDto.header.toUpperCase() : ""}</h4>
                <p className="card-text text-center">{blogDto.content}</p>
              </div>
            </div>
          </div>
          <div className='col-6 offset-3 text-center mt-4 '>
            <Link to="/blog/list" className='btn btn-primary px-5'><i className="fa-solid fa-list-ul me-2"></i>Back to List</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogView

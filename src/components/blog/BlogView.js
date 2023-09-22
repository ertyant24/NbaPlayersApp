import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogView() {

  const {id} = useParams();
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
  },[])

  console.log(blogDto)

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 offset-3 d-flex justify-content-center">
            <div className="card" style={{width: "400px"}}>
              <img className="card-img-top" src={blogDto.avatar} alt={blogDto.header} />
              <div className="card-body">
                <h4 className="card-title">{blogDto.header}</h4>
                <p className="card-text">{blogDto.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogView

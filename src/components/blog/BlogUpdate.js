import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

function BlogUpdate() {

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(`UpdateId: ${id}`);

  const [updateBlogData, setUpdateBlogData] = useState([]);
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`https://64e5fa9609e64530d17f608f.mockapi.io/api/v1/blog/react_project/${id}`)
      .then((response) => {
        console.log(response.data);
        setUpdateBlogData(response.data);
      })
      .catch((err) => {
        console.log(`Error Message: ${err}`);
      })
  }, [id])

  const onChangeHeader = (event) => {
    setHeader(event.target.value);
  }
  const onChangeContent = (event) => {
    setContent(event.target.value);
  }

  const updateBlog = async(event) => {
    event.preventDefault();

    const blogDto = {header, content};

    try {
      const response = await axios.put(`https://64e5fa9609e64530d17f608f.mockapi.io/api/v1/blog/react_project/${id}`, blogDto);
      console.log(response);
      if(response.status === 200){
        toastr.success(`Updated this blog`, `${updateBlogData.header} ==> ${blogDto.header ? blogDto.header : ""}`, {timeOut: 3000});
        navigate("/blog/list");
      }
    } catch (error) {
      console.log(`Error Message: ${error}`);
    }
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 className='text-center text-primary mb-3'>{updateBlogData.header ? updateBlogData.header.toUpperCase() : ""}</h1>
          </div><hr />
          <div className='col-6 offset-3'>
            <div className="my-3">
              <label htmlFor="header" className="form-label">
                Header
              </label>
              <input
                type="text"
                name="header"
                id="header"
                className="form-control"
                placeholder="Please enter blog's header"
                aria-describedby="helpId"
                onChange={onChangeHeader}
                value={header}
              />
            </div>
            <div className="my-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <input
                type="text"
                name="content"
                id="content"
                className="form-control"
                placeholder="Please enter blog's content"
                aria-describedby="helpId"
                onChange={onChangeContent}
                value={content}
              />
            </div>
            <div className='mt-4 text-end'>
              <button className='btn btn-danger me-3'>Reset</button>
              <button onClick={updateBlog} className='btn btn-primary'>Update Blog</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogUpdate

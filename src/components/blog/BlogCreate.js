import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

function BlogCreate() {

    const navigate = useNavigate();

    const [header, setHeader] = useState("");
    const [content, setContent] = useState("");

    const headerOnChange = (event) => {
        setHeader(event.target.value);
    }
    const contentOnChange = (event) => {
        setContent(event.target.value);
    }

    const addBlog = async (event) => {
        event.preventDefault();

        let small = document.getElementById("helpIdContent");
        if (content.length > 30) {
            small.innerText = "Content can be max 30 char."
        }
        if (content.length === 0) {
            small.innerText = "Content can be required."
        }
        
        let small1 = document.getElementById("helpId");
        if (header.length > 20) {
            small1.innerText = "Header can be max 20 char."
        }
        if (header.length === 0) {
            small1.innerText = "Header can be required."
        }

        let blogDto = { header, content };

        if (header.length < 20 && content.length < 30 && header.length !== 0 && content.length !== 0) {
            try {
                const response = await axios.post("https://64e5fa9609e64530d17f608f.mockapi.io/api/v1/blog/react_project", blogDto);
                console.log(response);
                if (response.status === 201) {
                    navigate("/blog/list");
                    toastr.success(`Add this blog`, `${response.data.header}`, { timeOut: 3000 });
                }
            } catch (error) {
                console.log(`Error Message: ${error}`);
            }
        }
    }

    const reset = () => {
        let small = document.getElementById("helpIdContent");
        let small1 = document.getElementById("helpId");
        small.innerText = "";
        small1.innerText = "";
        setContent("");
        setHeader("");
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-3">
                        <h1 className='text-center text-primary fw-bolder'>Blog Create</h1>
                    </div><hr />
                    <div className="col-6 offset-3">
                        <div className="my-4">
                            <label htmlFor="header" className="form-label">
                                Header
                            </label>
                            <input
                                value={header}
                                onChange={headerOnChange}
                                type="text"
                                className="form-control"
                                name="header"
                                id="header"
                                aria-describedby="helpId"
                                placeholder="Please enter blog' header"
                            />
                            <small id="helpId" className="form-text text-danger fw-semibold">

                            </small>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">
                                Content
                            </label>
                            <textarea
                                value={content}
                                onChange={contentOnChange}
                                style={{ height: "6rem" }}
                                className="form-control"
                                name="content"
                                id="content"
                                aria-describedby="helpId"
                                placeholder="Please enter blog's content"
                            />
                            <small id="helpIdContent" className="form-text text-danger fw-semibold">

                            </small>
                        </div>
                        <div className='mt-4 text-end'>
                            <button onClick={reset} className='btn btn-danger me-3'>Reset</button>
                            <button onClick={addBlog} className='btn btn-primary'>Add Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCreate

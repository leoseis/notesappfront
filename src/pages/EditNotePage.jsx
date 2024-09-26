import React,  { useEffect} from "react";
import { useParams } from "react-router-dom";
import "./AddNotePage.css";
import axios from "axios";

const EditNotePage = () => {

  
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/notes/${slug}`)
      .then((res) => {
         console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });



  return (
    <form>
    <h5>Update Note</h5>
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Title
      </label>
      <input
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Enter note's title"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Content
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={4}
        placeholder="Enter note's content"
      ></textarea>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        Note's category
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        style={{ height: "40px" }}
      >
        <option value="">Pick a category</option>
        <option value="BUSINESS">Business</option>
        <option value="PERSONAL">Personal</option>
        <option value="IMPORTANT">Important</option>
      </select>
    </div>

    <button
      className="btn btn-primary d-flex justify-content-center"
      style={{ width: "100%" }}
    >
      Update Note
    </button>
  </form>
  )
}

export default EditNotePage
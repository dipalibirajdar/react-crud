import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = () => {
    axios
      .put(`https://6495c976b08e17c91792ad5c.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </>
  );
}

export default Update;

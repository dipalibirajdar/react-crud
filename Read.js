import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios.get(`https://6495c976b08e17c91792ad5c.mockapi.io/crud`)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  function handleDelete(id) {
    axios.delete(`https://6495c976b08e17c91792ad5c.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
      .catch(error => {
        console.error(error);
      });
  }

  const setToLocalStorage = (id, name, email) =>{
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Handle</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Link to="/update">
                  <button className="btn btn-success" onClick={()=> setToLocalStorage(item.id,item.name,item.email)}>Edit</button>
                </Link>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Read;

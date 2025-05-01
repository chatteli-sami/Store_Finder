import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
  const [stores, setStores] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/stores')
      .then((res) => {
        console.log(res.data);
        setStores(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteStore = (idToDelete) => {
    axios
      .delete(`http://localhost:5000/api/stores/${idToDelete}`)
      .then((res) => {
        console.log(res.data);
        setStores((prevStores) =>
          prevStores.filter((store) => store._id !== idToDelete)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home">
      <div className="header">
        <h1>Store Finder</h1>
        <h4>Find stores in your area!</h4>
      </div>
      <div className="main">
        <table>
          <thead>
            <tr>
              <th>Store</th>
              <th>Store Number</th>
              <th>Open</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((oneStore) => (
              <tr key={oneStore._id}>
                <td>
                  <Link to={`/stores/oneStore/${oneStore._id}`}>
                    {oneStore.name}
                  </Link>
                </td>
                <td>{oneStore.storeNumber}</td>
                <td>{oneStore.open ? 'Open' : 'Closed'}</td>
                <td>
                  <button onClick={() => deleteStore(oneStore._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => nav('/stores/add')}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

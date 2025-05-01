import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './style/oneStore.css';

const OneStore = () => {
  const [store, setStore] = useState(null);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/stores/${id}`)
      .then((res) => {
        console.log(res.data);
        setStore(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="one-store-container">
      {store ? (
        <div>
          <div className="one-store-header">
            <h1>{store.storeNumber} Detail</h1>
            <Link className="back-link" to="/home">
              Go Back Home
            </Link>
          </div>
          <div className="one-store-main">
            <p>{store.name}</p>
            <p>Store Number : {store.storeNumber}</p>
            <p>Is It Open: {store.open ? 'Open' : 'Closed'}</p>
          </div>
          <div className="one-store-footer">
            <button onClick={() => nav(`/stores/edit/${store._id}`)}>
              Edit Store Detail
            </button>
          </div>
        </div>
      ) : (
        <h3 className="one-store-loading">Loading......</h3>
      )}
    </div>
  );
};

export default OneStore;

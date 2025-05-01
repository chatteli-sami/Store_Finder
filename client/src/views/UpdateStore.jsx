import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './style/Form.css'


const UpdateStore = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [storeNumber, setStoreNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [errorHandler, setErrorHandler] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/stores/' + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setStoreNumber(res.data.storeNumber);
        setOpen(res.data.open);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      name,
      storeNumber,
      open,
    };

    axios
      .put("http://localhost:5000/api/stores/" + id, newData)
      .then((res) => {
        console.log("✅✅✅", res.data);
        nav(`/stores/oneStore/${res.data._id}`);
      })
      .catch((err) => {
        console.log("❌❌❌❌", err.response?.data?.errors || err);
        setErrorHandler(err.response?.data?.errors || {});
      });

    setName('');
    setStoreNumber(0);
    setOpen(false);
  };

  return (
    <div>
      <div className="header">
        <div className="nav">
          <h1>Update Store</h1>
          <h4>Edit store details</h4>
        </div>
        <div>
          <Link to="/home">Go back Home</Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Store Name:</label> <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          {errorHandler.name && <p>{errorHandler.name.message}</p>}
        </div>
        <div>
          <label>Store Number:</label> <br />
          <input
            type="number"
            value={storeNumber}
            onChange={(e) =>
              setStoreNumber(parseInt(e.target.value))
            }
          />
          {errorHandler.storeNumber && (
            <p>{errorHandler.storeNumber.message}</p>
          )}
        </div>
        <div>
          <label>Open?</label> <br />
          <input
            type="checkbox"
            checked={open}
            onChange={(e) => setOpen(e.target.checked)}
          />
        </div>
        <button type="submit">Edit Store</button>
      </form>
    </div>
  );
};

export default UpdateStore;

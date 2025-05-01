import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate, Link } from 'react-router-dom';
import './style/Form.css'

const CreateStore = () => {
  const [name, setName] = useState('');
  const [storeNumber, setStoreNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [errorHandler, setErrorHandler] = useState({});
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      name,
      storeNumber: parseInt(storeNumber),
      open,
    };

    axios
      .post('http://localhost:5000/api/stores', newData)
      .then((res) => {
        console.log("✅ Success:", res.data);
        nav('/home');
      })
      .catch((err) => {
        console.log("❌ Error:", err.response.data.errors);
        setErrorHandler(err.response.data.errors);
      });

    setName('');
    setStoreNumber(0);
    setOpen(false);
  };

  return (
    <div>
      <div className='header'>
        <div className='nav'>
          <h1>New Store</h1>
          <h4>Add a new Store</h4>
        </div>
        <div>
          <Link to={'/home'}>Go Back Home</Link>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Store Name:</label> <br />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {errorHandler.name && <p style={{color:"red"}}>{errorHandler.name}</p>}
        </div>
        <div>
          <label>Store Number:</label> <br />
          <input
            type="number"
            value={storeNumber}
            onChange={e => setStoreNumber(e.target.value)}
          />
          {errorHandler.storeNumber && <p>{errorHandler.storeNumber}</p>}
        </div>
        <div>
          <label>Open?</label> <br />
          <input
            type="checkbox"
            checked={open}
            value={open}
            onChange={e => setOpen(e.target.checked)}
          />
          {errorHandler.open && <p>{errorHandler.open.message}</p>}
        </div>
        <button type="submit">Add a New Store</button>
      </form>
    </div>
  );
};

export default CreateStore;

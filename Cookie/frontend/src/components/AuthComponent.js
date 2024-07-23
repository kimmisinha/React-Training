import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie, setCookie } from '../utils/cookieUtils';
import { createToken } from '../utils/tokenUtils';

const AuthComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = createToken();
    setCookie('customAuthToken', token, 7);

    const authToken = getCookie('customAuthToken');

    if (authToken) {
      // Make an authorized request
      axios.get('http://localhost:5000/api/protected', { 
        headers: {
          'Authorization': `Bearer ${authToken}`
        },
        withCredentials: true 
      })
      .then(response => setData(response.data))
      .catch(error => {
        console.error('There was an error!', error);
        console.log("error",error)
        setError(error);
      });
    } else {
      setError('Authorization token not found');
    }
  }, []);
  {        console.log(data)
  }  
  return (
    <div>
      <h1>Protected Data</h1>
      {error && <p style={{ color: 'red' }}>{error.message || error}</p>}
      {data ? (
      <h2>Token verfied sucesfully</h2>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AuthComponent;

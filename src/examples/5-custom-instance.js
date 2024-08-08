import axios from 'axios';
import { useEffect } from 'react';
import authFetch from '../final/axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const nores = await authFetch()
      console.log(nores)
      const res = await axios(randomUserUrl)
      console.log(res)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;

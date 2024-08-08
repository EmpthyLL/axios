import { useEffect } from 'react';
import authFetch from '../final/axios/interceptors';
import axios from 'axios';

const url = 'https://www.course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const res = await authFetch()
      console.log(res)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;

import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-productss';

const FirstRequest = () => {
  async function getData(){
    try {
      const res = await axios(url)
      console.log(res.data)
    } catch (error) {
      console.log(error.response);
    }
  }
  useEffect(() => {
    getData()
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;

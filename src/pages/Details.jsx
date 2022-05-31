import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Info } from '../components/info/Info';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <button onClick={goBack}>
        <IoArrowBack /> Back
      </button>
      {country && <Info navigate={navigate} {...country} />}
    </div>
  );
};

import { useState } from 'react';
import './app.css';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} setCountries={setCountries} />} />
            {/* <HomePage countries={countries} setCountries={setCountries} /> */}
          {/* </Route> */}
          <Route path="country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
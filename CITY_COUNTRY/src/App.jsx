import AddCountry from './components/AddCountry'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx';
import AddCityComp from './components/AddCityComp';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-city" element={<AddCityComp />} />
        <Route path="/add-country" element={<AddCountry />} />
      </Routes>
    </>
  );
}

export default App

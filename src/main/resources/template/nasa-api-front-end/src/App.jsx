import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NasaData from './NasaData';
import SecondPage from './SecondPage';


function App() {
  
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={<NasaData />}
        />
        <Route path="/second" element={<SecondPage  />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LogementDetails from './Pages/LogementDetails';
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Pages/Counter';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {["/", "/home"].map((path, index) =>
          <Route path={path} element={<Home />} key={index} />
        )}
        <Route path="/logement/:id" element={<LogementDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;

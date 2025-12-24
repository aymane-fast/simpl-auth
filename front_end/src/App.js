import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Success from './Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

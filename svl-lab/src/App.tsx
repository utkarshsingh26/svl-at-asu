import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from '../src/pages/Default';
import Home from '../src/pages/Home';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Default/>} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from '../src/pages/Default';
import Home from '../src/pages/Home';
import Papers from '../src/pages/Papers';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Default/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/papers" element={<Papers />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

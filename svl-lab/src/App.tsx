import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from '../src/pages/Default';
import Home from '../src/pages/Home';
import Papers from '../src/pages/Papers';
import Members from '../src/pages/Members';
import About from '../src/pages/About';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Default/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/papers" element={<Papers />} />
      <Route path="/members" element={<Members />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

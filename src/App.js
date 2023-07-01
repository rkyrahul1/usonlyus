import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Iloveyou from './iloveyou';
import Us from "./us";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/usonlyus" element={<Iloveyou />}></Route>
          <Route path="/us" element={<Us/>}></Route>
          {/* <Route index element={<Home />} />
          <Route path="/" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </BrowserRouter>
  </>
     

  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./layouts/Main";

import "./assets/css/LandingPage.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

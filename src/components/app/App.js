import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";


import MainPage from '../../pages/MainPage'
import './app.css'

const router = createBrowserRouter([{
  path: "",
  element: <MainPage/>
}])

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

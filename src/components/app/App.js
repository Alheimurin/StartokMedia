import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";


import MainPage from '../../pages/MainPage'
import ContactPage from '../../pages/ContactPage'
import CompanyBrandPage from '../../pages/CompanyBrandPage'

import './app.css'

const router = createBrowserRouter([
  {
  path: "/StartokMedia",
  element: <MainPage/>
  },
  {
    path: "/StartokMedia/contacts",
    element: <ContactPage/>
  },
  {
    path: "/StartokMedia/company",
    element: <CompanyBrandPage/>
  }
])

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/StartokMedia" element={<MainPage/>}></Route>
        <Route path="/StartokMedia/contacts" element={<ContactPage/>}></Route>
        <Route path="/StartokMedia/company" element={<CompanyBrandPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

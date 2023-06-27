import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";


import MainPage from '../../pages/MainPage'
import ContactPage from '../../pages/ContactPage'
import CompanyBrandPage from '../../pages/CompanyBrandPage'
import MusicArtistPage from '../../pages/MusicArtistPage'
import IdentityPage from '../../pages/IdentityPage'

import './app.css'

const router = createBrowserRouter([
  {
  path: "/",
  element: <MainPage/>
  },
  {
    path: "contacts",
    element: <ContactPage/>
  },
  {
    path: "company",
    element: <CompanyBrandPage/>
  },
  {
    path: "music",
    element: <MusicArtistPage/>
  },
  {
    path: "identity",
    element: <IdentityPage/>
  }
])

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="contacts" element={<ContactPage/>}></Route>
        <Route path="company" element={<CompanyBrandPage/>}></Route>
        <Route path="music" element={<MusicArtistPage/>}></Route>
        <Route path="identity" element={<IdentityPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

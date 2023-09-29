import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";
import { IntlProvider } from "react-intl";

import MainPage from '../../pages/MainPage'
import ContactPage from '../../pages/ContactPage'
import CompanyBrandPage from '../../pages/CompanyBrandPage'
import MusicArtistPage from '../../pages/MusicArtistPage'
import IdentityPage from '../../pages/IdentityPage'
import ErrorPage from "../../pages/ErrorPage";
import { LOCALES } from '../../i18n/locales'
import { messages } from '../../i18n/messages'

import './app.css'

function App (props) {

  const locale = {
    en: LOCALES.ENGLISH,
    ru: LOCALES.RUSSIAN
  }
  
  const [currLang, setCurrLang] = useState(getLocale())

  function getLocale () {
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.ENGLISH
  }

  return (
    <IntlProvider messages={messages[currLang]} locale={currLang} defaultLocale={LOCALES.ENGLISH}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage setCurrLang={setCurrLang}/>}/>
          <Route path="contacts" element={<ContactPage setCurrLang={setCurrLang}/>}/>
          <Route path="company" element={<CompanyBrandPage setCurrLang={setCurrLang}/>}/>
          <Route path="music" element={<MusicArtistPage setCurrLang={setCurrLang}/>}/>
          <Route path="identity" element={<IdentityPage setCurrLang={setCurrLang}/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;

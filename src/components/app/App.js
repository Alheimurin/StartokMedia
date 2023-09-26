import { BrowserRouter, Route, Routes} from "react-router-dom";
import { IntlProvider } from "react-intl";

import MainPage from '../../pages/MainPage'
import ContactPage from '../../pages/ContactPage'
import CompanyBrandPage from '../../pages/CompanyBrandPage'
import MusicArtistPage from '../../pages/MusicArtistPage'
import IdentityPage from '../../pages/IdentityPage'
import ErrorPage from "../../pages/ErrorPage";

import './app.css'

import { LOCALES } from '../../i18n/locales'
import { messages } from '../../i18n/messages'

function App() {

  const locale = LOCALES.RUSSIAN

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.RUSSIAN}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="contacts" element={<ContactPage/>}></Route>
          <Route path="company" element={<CompanyBrandPage/>}></Route>
          <Route path="music" element={<MusicArtistPage/>}></Route>
          <Route path="identity" element={<IdentityPage/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;

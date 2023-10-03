import Contacts from "../components/Contacts/Contacts.jsx";

function ContactPage ({setCurrLang, getLocale}) {
    return (
        <Contacts setCurrLang={setCurrLang} getLocale={getLocale}/>
    )
}

export default ContactPage
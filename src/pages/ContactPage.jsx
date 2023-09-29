import Contacts from "../components/Contacts/Contacts";

function ContactPage ({setCurrLang, getLocale}) {
    return (
        <Contacts setCurrLang={setCurrLang} getLocale={getLocale}/>
    )
}

export default ContactPage
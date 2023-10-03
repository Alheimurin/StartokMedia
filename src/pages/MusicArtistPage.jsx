import MusicArtist from "../components/MusicArtist/MusicArtist.jsx";

function MusicArtistPage ({setCurrLang, getLocale}) {
    return (
        <MusicArtist setCurrLang={setCurrLang} getLocale={getLocale}/>
    )
}

export default MusicArtistPage
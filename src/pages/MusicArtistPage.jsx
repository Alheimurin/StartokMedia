import MusicArtist from "../components/MusicArtist/MusicArtist";

function MusicArtistPage ({setCurrLang, getLocale}) {
    return (
        <MusicArtist setCurrLang={setCurrLang} getLocale={getLocale}/>
    )
}

export default MusicArtistPage
const MEDIA = importAll(require.context('./media', false, /\.(png|jpe?g|svg|webp|mp4)$/));

function importAll(r) {
    let media = {};
    r.keys().forEach(element => {
        media[element.replace('./', '')] = r(element);
    });
    return media;
}

export function getMedia(str) {
    return MEDIA[str]
}

export function isVideo(str) {
    const strList = str.split('.')
    if (strList.length === 2 && strList[1] === 'mp4') return true
    return false
}

export function isSmallScreen() {
    const mediaDict = window.matchMedia("only screen and (max-width: 1160px)")
    return mediaDict.matches
}
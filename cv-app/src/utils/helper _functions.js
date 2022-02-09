export function getDomainFromUrl(url) {
    if (url.startsWith('https')) {
        return url.substr(12)
    }
    if (url.startsWith('http:')) {
        return url.substr(11);
    }
    return;
}
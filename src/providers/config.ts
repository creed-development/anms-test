function isLocalHost() {
    // Rudimentary check to see if we are running local
    return window.location.hostname.indexOf('localhost') > 0;
}

export let SERVER_URL = isLocalHost() ? "/" : "https://motilitysociety.org/mobile";
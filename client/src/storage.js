exports.setInStorage = (key, obj) => {
    if (!key) {
        return null;
    } else {
        try {
            localStorage.setItem(key, obj);
            console.log(`token ${obj} stored in localStorage`);
        } catch (err) {
            console.log(`Couldnt store in localStorage: ${err}`);
            return null;
        }
    }
}

exports.getFromStorage = (key) => {
    if (!key) {
        return null;
    } else {
        try {
            const token = localStorage.getItem(key);
            const parsedToken = JSON.parse(token);
            return parsedToken;
        } catch (err) {
            console.log(`Couldnt get the token from localStorage: ${err}`);
        }
    }
}
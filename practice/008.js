function formatMessage(string) {
    return /sale|spam|buy/.test(string.toLowerCase())
}

class CampaignFlow {
    constructor(params) {
        Object.assign(this, params);
    }
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => new CampaignFlow({...result[0]}));

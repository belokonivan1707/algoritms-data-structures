function order(words) {
    var array = words.split(' ');
    var sortedArray = [];
    for (i = 0; i <= array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
}

function getRequest() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res => res.json()))
}

function addToNetworkRequest() {
    return new Promise((resolve, reject) => {
        getRequest().then((result) => {
            throw new Error('hi hi hi')
            resolve(result)
        }).catch(reject)
    })
}

function addToNetwork() {
 return addToNetworkRequest()
    .then((result) => result)
    .catch((error) => error)
}

addToNetwork().then((result) => {
    console.log('then outside', result)
}).catch((err) => console.log('catch outside', err))

//   return new Promise((resolve, reject) => {
//     postRequest({url, discoveryIds})
//     .then(response => {
//         this.updatePublisherModels(publishersModels, response);
//         const addedPublisherModels = publishersModels.filter(model => model.get('PublisherId'));

//         if (isEmpty(addedPublisherModels)) {
//         //    return reject('Publishers were not added: all publishers failed');
//         throw new Error('Publishers were not added: all publishers failed')
//         }

//         app.vent.trigger('publisher:added:to:network:bulk', addedPublisherModels.map(item => item.toJSON()));
//         resolve(publishersModels);
//     })
//     .catch(reject)
// });
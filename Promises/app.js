// const willGetYouADog = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const rand = Math.random();
//             if (rand < 0.5) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 3000);
//     });
// }
// willGetYouADog().then(() => { // este codigo correra solamente si resolve
//     console.log("Yay we have a dog");
// }).catch(() => { //este codigo correra solamente si reject
//     console.log("No dog :(");
// })

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                "/users": [
                    { id: 1, username: "Bilbo" },
                    { id: 2, username: "Esmeralda" }
                ],
                "/about": "This is the about page"
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 202, data });
            } else {
                reject({ status: 404 });
            }
        }
            , 3000);
    });
};

fakeRequest("/about").then((res) => {
    console.log("Status code: ", res.status);
    console.log("Data: ", res.data);
    console.log("REQUESTED WORKED");
}).catch((res) => {
    console.log(res.status);
    console.log("REQUESTED FAILED");
})
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
                '/users': [
                    { id: 1, username: 'Bilbo' },
                    { id: 5, username: 'Esmerelda' }
                ],
                '/users/1': {
                    id: 1,
                    username: 'Bilbo',
                    upvotes: 360,
                    city: 'Lisbon',
                    topPostId: 454321
                },
                '/users/5': {
                    id: 5,
                    username: 'Esmerelda',
                    upvotes: 571,
                    city: 'Honolulu'
                },
                '/posts/454321': {
                    id: 454321,
                    title:
                        'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
                },
                '/about': 'This is the about page!'
            };
            const data = pages[url];
            if (data) {
                resolve({ status: 202, data });
            } else {
                reject({ status: 404 });
            }
        }, 1000);
    });
};

// fakeRequest("/about").then((res) => {
//     console.log("Status code: ", res.status);
//     console.log("Data: ", res.data);
//     console.log("REQUESTED WORKED");
// }).catch((res) => {
//     console.log(res.status);
//     console.log("REQUESTED FAILED");
// })

fakeRequest("/users")
    .then((res) => {
        console.log(res);
        const id = res.data[0].id; //id del primer usuario
        return fakeRequest(`/users/${id}`)
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log("oh no", err);
    })
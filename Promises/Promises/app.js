const willGetYouADog = new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) {
        resolve();
    } else {
        reject();
    }
}).then(() => { // este codigo correra solamente si resolve
    console.log("Yay we have a dog");
}).catch(() => { //este codigo correra solamente si reject
    console.log("No dog :(");
})
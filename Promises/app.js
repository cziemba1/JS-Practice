const willGetYouADog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
}
willGetYouADog().then(() => { // este codigo correra solamente si resolve
    console.log("Yay we have a dog");
}).catch(() => { //este codigo correra solamente si reject
    console.log("No dog :(");
})
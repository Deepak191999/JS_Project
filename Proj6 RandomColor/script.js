const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randomIndx = Math.floor(Math.random() * 16);
        color += hex[randomIndx];
    }
    return color;
};

let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBg, 1000);
    }

    function changeBg() {
        console.log(randomColor());
        document.body.style.backgroundColor = randomColor();
    }
};

document.querySelector("#start").addEventListener("click", startChangingColor);

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector("#stop").addEventListener("click", stopChangingColor);

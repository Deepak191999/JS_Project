const clock = document.getElementById('clock')
// or
// document.querySelector('#clock')

// let date= new Date();
// console.log(date.toLocaleTimeString());

setInterval(() => {
    let date= new Date();
clock.innerHTML = date.toLocaleString();
}, 1000);

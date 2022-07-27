const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')


const relogio = setInterval(function time() {

    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hr < 10) {
        hr = '0' + hr
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }


    hours.innerHTML = hr
    minutes.innerHTML = min
    seconds.innerHTML = sec
})
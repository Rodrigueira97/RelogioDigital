const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')


const relogio = setInterval(function time() {
    let data = new Date();
    
    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    if (sec < 10) {
        sec = '0' + sec
    }
    if (hr < 10) {
        hr = '0' + hr
    }
    if (min < 10) {
        min = '0' + min
    }

    hours.innerHTML = hr
    minutes.innerHTML = min
    seconds.innerHTML = sec
})
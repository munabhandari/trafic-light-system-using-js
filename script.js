function trafficLightCycle() {
    var greenLight = document.querySelector('.green');
    var yellowLight = document.querySelector('.yellow');
    var redLight = document.querySelector('.red');

    triggerLight(greenLight, 0, 2000)
    triggerLight(yellowLight, 2000, 4000)
    triggerLight(redLight, 4000, 6000)
}

function triggerLight(light, startTime, endTime) {
    setTimeout(function () {
        light.classList.add('on')
        light.classList.remove('off')
    }, startTime);


    setTimeout(function () {
        light.classList.add('off')
        light.classList.remove('on')
    }, endTime);
}

trafficLightCycle();
setInterval(trafficLightCycle, 6000);
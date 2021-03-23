function trafficLightCycle() {

    var greenLight = document.querySelector('.green');
    var yellowLight = document.querySelector('.yellow');
    var redLight = document.querySelector('.red');

    setTimeout(function () {
        greenLight.classList.add('on')
        greenLight.classList.remove('off')
    }, 0);


    setTimeout(function () {
        greenLight.classList.add('off')
        greenLight.classList.remove('on')
    }, 2000);

    setTimeout(function () {
        yellowLight.classList.add('on')
        yellowLight.classList.remove('off')
    }, 2000);


    setTimeout(function () {
        yellowLight.classList.add('off')
        yellowLight.classList.remove('on')
    }, 4000);

    setTimeout(function () {
        redLight.classList.add('on')
        redLight.classList.remove('off')
    }, 4000);


    setTimeout(function () {
        redLight.classList.add('off')
        redLight.classList.remove('on')
    }, 6000);


}

trafficLightCycle();
setInterval(trafficLightCycle, 6000);
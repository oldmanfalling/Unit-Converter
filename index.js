const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204
const convertBtn = document.getElementById("convert-btn")
const feetEl = document.getElementById("feet-el")
const metersEl = document.getElementById("meters-el")
const gallonEl = document.getElementById("gallons-el")
const literEl = document.getElementById("liters-el")
const poundEl = document.getElementById("pounds-el")
const kiloEl = document.getElementById("kilos-el")

convertBtn.addEventListener("click", function() {

    const inputField = document.getElementById("qty").value

    let meters = inputField * meterToFeet
    let feet = inputField / meterToFeet
    let liters = inputField * literToGallon
    let gallons = inputField / literToGallon
    let kilos = inputField * kiloToPound
    let pounds = inputField / kiloToPound

    feetEl.innerHTML = `${inputField} meters = ${meters.toFixed(3)} feet`
    metersEl.innerHTML = `${inputField} feet = ${feet.toFixed(3)} meters`
    literEl.innerHTML = `${inputField} gallons = ${gallons.toFixed(3)} liters`
    gallonEl.innerHTML = `${inputField} liters = ${liters.toFixed(3)} gallons`
    poundEl.innerHTML = `${inputField} kilos = ${kilos.toFixed(3)} pounds`
    kiloEl.innerHTML = `${inputField} pounds = ${pounds.toFixed(3)} kilos`
    
})





let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.getElementById("#bill").valueAsNumber
}

function receiveBillValue() {
    numberOfPeople = document.querySelector("#peaple").valueAsNumber
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}
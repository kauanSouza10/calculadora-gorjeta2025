let bill = 0
let tipPercentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.getElementById("#bill").valueAsNumber

    calculateResults()
}

function receiveBillValue() {
    numberOfPeople = document.querySelector("#peaple").valueAsNumber

    calculateResults()
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100

    removeClassButtonSelected()

    document.querySelector("#custom-tip").value = ""

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")

    calculateResults()
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100

    removeClassButtonSelected()

    calculateResults()
}

function removeClassButtonSelected() {
    if (buttomSelected !== null) {
        buttonSelected.classList.remove("buttom-selected")
        buttonSelected = null
    }
}

function calculateResults() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeaple !== 0) {
      let tipAmountPerson = calculateTipAmountPerson()
       calculateTotalPeeson()    
    }
}

function calculateTipAmountPerson() {
    let tipAmountStrong = document.querySelected(".amount strong")
    let tipAmountPerson = bill * tipPercentage / numberOfPeople
    tipAmountStrong. textContent = `$${tiptalAmountPerson.toFixed(2)}`
    return tipAmountPerson
}

function calculateTotalPeeson(tipAmountPerson) {
    let totalStrong = document.querySelector("total strong")
    let totalAmountPerson = bill / numberOfPeople + tipAmountPerson
    totalStrong.textContent = `$${totalAmountPerson.toFixed(2)}`
}
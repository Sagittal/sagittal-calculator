const {round} = require("../utilities/round")

const formatMina = mina => {
    if (!mina) return "       "

    let formattedMina = round(mina, 3).toString()

    let decimalPointIndex = formattedMina.indexOf(".")

    if (decimalPointIndex > 0) {
        let zerosToAppend = 3 - (formattedMina.length - (decimalPointIndex + 1))
        while (zerosToAppend > 0) {
            formattedMina = formattedMina + "0"
            zerosToAppend -= 1
        }
    } else {
        decimalPointIndex = formattedMina.length
    }
    let spacesToPrepend = 3 - decimalPointIndex
    while (spacesToPrepend > 0) {
        formattedMina = " " + formattedMina
        spacesToPrepend -= 1
    }

    return formattedMina
}

module.exports = {
    formatMina,
}

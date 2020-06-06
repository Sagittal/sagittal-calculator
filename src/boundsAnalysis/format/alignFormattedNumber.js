const alignFormattedNumber = formattedNumber => {
    while (formattedNumber.length < 7) {
        formattedNumber = " " + formattedNumber
    }

    return formattedNumber
}

module.exports = {
    alignFormattedNumber,
}

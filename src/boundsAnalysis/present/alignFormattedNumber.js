const alignFormattedNumber = presentedNumber => {
    while (presentedNumber.length < 7) {
        presentedNumber = " " + presentedNumber
    }

    return presentedNumber
}

module.exports = {
    alignFormattedNumber,
}

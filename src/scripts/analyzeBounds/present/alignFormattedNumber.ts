const alignFormattedNumber = presentedNumber => {
    while (presentedNumber.length < 7) {
        presentedNumber = " " + presentedNumber
    }

    return presentedNumber
}

export {
    alignFormattedNumber,
}

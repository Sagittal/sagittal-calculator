const alignFormattedNumber = (presentedNumber: string) => {
    while (presentedNumber.length < 7) {
        presentedNumber = " " + presentedNumber
    }

    return presentedNumber
}

export {
    alignFormattedNumber,
}

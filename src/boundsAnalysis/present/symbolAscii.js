const presentSymbolAscii = symbolAscii => {
    const shaftIndex = symbolAscii.indexOf("|")

    let spacesToPrepend = 5 - shaftIndex

    let presentedSymbolAscii = symbolAscii.slice()
    while (spacesToPrepend > 0) {
        presentedSymbolAscii = " " + presentedSymbolAscii
        spacesToPrepend -= 1
    }
    while (presentedSymbolAscii.length < 8) {
        presentedSymbolAscii = presentedSymbolAscii + " "
    }

    return presentedSymbolAscii
}

module.exports = {
    presentSymbolAscii,
}

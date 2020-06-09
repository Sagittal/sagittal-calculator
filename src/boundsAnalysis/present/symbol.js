const presentSymbol = symbol => {
    const shaftIndex = symbol.indexOf("|")

    let spacesToPrepend = 5 - shaftIndex

    let presentedSymbol = symbol.slice()
    while (spacesToPrepend > 0) {
        presentedSymbol = " " + presentedSymbol
        spacesToPrepend -= 1
    }
    while (presentedSymbol.length < 8) {
        presentedSymbol = presentedSymbol + " "
    }

    return presentedSymbol
}

module.exports = {
    presentSymbol,
}

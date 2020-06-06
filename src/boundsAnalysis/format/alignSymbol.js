const alignSymbol = symbol => {
    const shaftIndex = symbol.indexOf("|")

    let spacesToPrepend = 5 - shaftIndex

    let formattedSymbol = symbol.slice()
    while (spacesToPrepend > 0) {
        formattedSymbol = " " + formattedSymbol
        spacesToPrepend -= 1
    }
    while (formattedSymbol.length < 8) {
        formattedSymbol = formattedSymbol + " "
    }

    return formattedSymbol
}

module.exports = {
    alignSymbol,
}

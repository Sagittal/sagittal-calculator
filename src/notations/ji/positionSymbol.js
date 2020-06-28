const {SYMBOLS} = require("./symbols")

const computePositionSymbol = position => {
    if (!position) return

    return SYMBOLS.find(symbol => {
        return symbol.primaryComma.position === position
    })
}

module.exports = {
    computePositionSymbol,
}

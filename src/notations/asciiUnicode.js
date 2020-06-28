const {SYMBOLS} = require("./ji/symbols")

const unicodeFromAscii = ascii => {
    return SYMBOLS.find(symbol => symbol.ascii === ascii).unicode
}

module.exports = {
    unicodeFromAscii,
}

const {COMMAS} = require("./commas")

const unicodeFromAscii = symbolAscii => {
    return COMMAS.find(comma => comma.symbol === symbolAscii).unicode
}

module.exports = {
    unicodeFromAscii,
}

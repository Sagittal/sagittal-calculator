const {COMMAS} = require("./commas")

const unicodeFromAscii = ascii => {
    return COMMAS.find(comma => comma.ascii === ascii).unicode
}

module.exports = {
    unicodeFromAscii,
}

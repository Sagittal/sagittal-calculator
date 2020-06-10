const {BOUNDED_COMMAS} = require("../data/boundedCommas")

const extractBoundIdentifiers = (bound, boundIndex) => {
    const {position} = bound
    const boundedCommas = BOUNDED_COMMAS[boundIndex]
    const extremeBoundedCommas = boundedCommas["EXTREME"]
    const [lesserBoundedComma, greaterBoundedComma] = extremeBoundedCommas

    return {
        extremeLevelLesserBoundedCommaSymbol: lesserBoundedComma ? lesserBoundedComma.symbol : "",
        extremeLevelGreaterBoundedCommaSymbol: greaterBoundedComma ? greaterBoundedComma.symbol : "",
        position,
        boundedCommas,
        lesserBoundedMina: lesserBoundedComma ? lesserBoundedComma.mina : "",
        greaterBoundedMina: greaterBoundedComma && greaterBoundedComma.mina,
    }
}

module.exports = {
    extractBoundIdentifiers,
}

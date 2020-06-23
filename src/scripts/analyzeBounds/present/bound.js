const {BOUNDED_COMMAS} = require("../../../notations/ji/boundedCommas")

const extractBoundIdentifiers = bound => {
    const {position, id} = bound
    const boundedCommas = BOUNDED_COMMAS.find(comma => comma.id === id)
    const extremeBoundedCommas = boundedCommas["EXTREME"]
    const [lesserBoundedComma, greaterBoundedComma] = extremeBoundedCommas

    return {
        extremeLevelLesserBoundedCommaSymbol: lesserBoundedComma ? lesserBoundedComma.ascii : "",
        extremeLevelGreaterBoundedCommaSymbol: greaterBoundedComma ? greaterBoundedComma.ascii : "",
        position,
        boundedCommas,
        lesserBoundedMina: lesserBoundedComma ? lesserBoundedComma.mina : "",
        greaterBoundedMina: greaterBoundedComma && greaterBoundedComma.mina,
    }
}

module.exports = {
    extractBoundIdentifiers,
}

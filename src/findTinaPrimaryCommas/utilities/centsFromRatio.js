const {CENTS_PER_OCTAVE} = require("../constants")

const computeCentsFromRatio = ratio => {
    return Math.log2(ratio[0]/ratio[1]) * CENTS_PER_OCTAVE
}

module.exports = {
    computeCentsFromRatio,
}

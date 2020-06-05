const {LEVEL_EDA_STEP_SIZES} = require("../data/intervals")

const calculateWithinHalfLevelEda = (level, position, previousPosition) => {
    const levelEdaStepSize = LEVEL_EDA_STEP_SIZES[level]

    return Math.abs(position - previousPosition) < levelEdaStepSize / 2
}

module.exports = {
    calculateWithinHalfLevelEda,
}

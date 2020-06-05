const {LEVELS, LEVEL_EDAS} = require("./levels")

const APOTOME = Math.log2(2187 / 2048) * 1200    // 113.68500605771192
const TINA = 1 / 809 * APOTOME                      // 0.14052534741373537
const MAXIMUM_POSITION = Math.log2(
    Math.pow(3, 9.5)
    /
    Math.pow(2, 15),
) * 1200                                            // 68.5725082211804

const LEVEL_EDA_STEP_SIZES = LEVEL_EDAS.reduce(
    (levelEdaStepSizes, levelEda, index) => {
        return {
            ...levelEdaStepSizes,
            [LEVELS[index]]: APOTOME / levelEda,
        }
    },
    {},
) // 5.41357171705, 2.41882991613, 1.96008631134, 0.48791848093, 0.14052534741

module.exports = {
    APOTOME,
    TINA,
    MAXIMUM_POSITION,
    LEVEL_EDA_STEP_SIZES,
}

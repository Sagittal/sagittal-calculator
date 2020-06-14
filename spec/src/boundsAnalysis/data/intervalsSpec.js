const {ACCURACY_THRESHOLD} = require("../../../../src/boundsAnalysis/utilities/constants")
const {LEVEL_EDA_STEP_SIZES, TINA, MINA, ULTRINA, HIGHINA, MEDINA} = require("../../../../src/boundsAnalysis/data/intervals")

describe("LEVEL_EDA_STEP_SIZES", () => {
    it("has the levels' step sizes equal to the correct ina", () => {
        expect(LEVEL_EDA_STEP_SIZES["INSANE"]).toBeCloseTo(TINA, ACCURACY_THRESHOLD)
        expect(LEVEL_EDA_STEP_SIZES["EXTREME"]).toBeCloseTo(MINA, ACCURACY_THRESHOLD)
        expect(LEVEL_EDA_STEP_SIZES["ULTRA"]).toBeCloseTo(ULTRINA, ACCURACY_THRESHOLD)
        expect(LEVEL_EDA_STEP_SIZES["HIGH"]).toBeCloseTo(HIGHINA, ACCURACY_THRESHOLD)
        expect(LEVEL_EDA_STEP_SIZES["MEDIUM"]).toBeCloseTo(MEDINA, ACCURACY_THRESHOLD)
    })
})

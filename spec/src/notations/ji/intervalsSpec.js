const {ACCURACY_THRESHOLD} = require("../../../../src/utilities/constants")
const {INA_SIZES, TINA, MINA, ULTRINA, HIGHINA, MEDINA} = require("../../../../src/notations/ji/intervals")

describe("INA_SIZES", () => {
    it("has the levels' step sizes equal to the correct ina", () => {
        expect(INA_SIZES["INSANE"]).toBeCloseTo(TINA, ACCURACY_THRESHOLD)
        expect(INA_SIZES["EXTREME"]).toBeCloseTo(MINA, ACCURACY_THRESHOLD)
        expect(INA_SIZES["ULTRA"]).toBeCloseTo(ULTRINA, ACCURACY_THRESHOLD)
        expect(INA_SIZES["HIGH"]).toBeCloseTo(HIGHINA, ACCURACY_THRESHOLD)
        expect(INA_SIZES["MEDIUM"]).toBeCloseTo(MEDINA, ACCURACY_THRESHOLD)
    })
})

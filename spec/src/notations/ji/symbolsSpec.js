const {computeCentsFromRatio} = require("../../../../src/utilities/comma/centsFromRatio")
const {computeRatioFromMonzo} = require("../../../../src/utilities/comma/ratioFromMonzo")
const {SYMBOLS} = require("../../../../src/notations/ji/symbols")
const {ACCURACY_THRESHOLD} = require("../../../../src/utilities/constants")

describe("SYMBOLS", () => {
    it("is the case that the position (cents) for each symbol agrees with its monzo", () => {
        SYMBOLS.forEach(symbol => {
            const ratio = computeRatioFromMonzo(symbol.primaryComma.monzo)
            const cents = computeCentsFromRatio(ratio)

            expect(cents).toBeCloseTo(symbol.primaryComma.position, ACCURACY_THRESHOLD)
        })
    })
})

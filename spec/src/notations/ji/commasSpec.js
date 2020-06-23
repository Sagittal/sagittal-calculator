const {computeCentsFromRatio} = require("../../../../src/utilities/comma/centsFromRatio")
const {computeRatioFromMonzo} = require("../../../../src/utilities/comma/ratioFromMonzo")
const {COMMAS} = require("../../../../src/notations/ji/commas")
const {ACCURACY_THRESHOLD} = require("../../../../src/utilities/constants")

describe("COMMAS", () => {
    it("is the case that the position for each comma agrees with its monzo", () => {
        COMMAS.forEach(comma => {
            const ratio = computeRatioFromMonzo(comma.monzo)
            const cents = computeCentsFromRatio(ratio)

            expect(cents).toBeCloseTo(comma.position, ACCURACY_THRESHOLD)
        })
    })
})

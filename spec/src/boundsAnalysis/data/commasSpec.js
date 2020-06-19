const {computeCentsFromRatio} = require("../../../../src/findTinaPrimaryCommas/utilities/centsFromRatio")
const {computeRatioFromMonzo} = require("../../../../src/findTinaPrimaryCommas/utilities/ratioFromMonzo")
const {COMMAS} = require("../../../../src/boundsAnalysis/data/commas")
const {ACCURACY_THRESHOLD} = require("../../../../src/boundsAnalysis/utilities/constants")

describe("COMMAS", () => {
    it("is the case that the position for each comma agrees with its monzo", () => {
        COMMAS.forEach(comma => {
            const ratio = computeRatioFromMonzo(comma.monzo)
            const cents = computeCentsFromRatio(ratio)

            expect(cents).toBeCloseTo(comma.position, ACCURACY_THRESHOLD)
        })
    })
})

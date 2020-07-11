import { computeCentsFromRatio } from "../../../../src/utilities/comma/centsFromRatio"
import { computeRatioFromMonzo } from "../../../../src/utilities/comma/ratioFromMonzo"
import { SYMBOLS } from "../../../../src/notations/ji/symbols"
import { ACCURACY_THRESHOLD } from "../../../../src/utilities/constants"

describe("SYMBOLS", () => {
    it("is the case that the position (cents) for each symbol agrees with its monzo", () => {
        SYMBOLS.forEach(symbol => {
            const ratio = computeRatioFromMonzo(symbol.primaryComma.monzo)
            const cents = computeCentsFromRatio(ratio)

            expect(cents).toBeCloseTo(symbol.primaryComma.position, ACCURACY_THRESHOLD)
        })
    })
})

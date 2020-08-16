import { ACCURACY_THRESHOLD } from "../../../../src/general/code/constants"
import { computeMonzoFromRatio } from "../../../../src/general/music"
import { computeCentsFromRatio } from "../../../../src/general/music/centsFromRatio"
import { computeCommaName } from "../../../../src/general/music/name"
import { computeRatioFromMonzo } from "../../../../src/general/music/ratioFromMonzo"
import { JI_SYMBOLS } from "../../../../src/notations/ji"

describe("SYMBOLS", () => {
    it("is the case that the cents for each symbol agrees with its monzo", () => {
        JI_SYMBOLS.forEach(symbol => {
            const ratio = computeRatioFromMonzo(symbol.primaryComma.monzo)
            const cents = computeCentsFromRatio(ratio)

            expect(cents).toBeCloseTo(symbol.primaryComma.cents, ACCURACY_THRESHOLD)
        })
    })

    it("is the case that the name for each symbol agrees with its monzo", () => {
        JI_SYMBOLS.forEach(symbol => {
            const name = computeCommaName(symbol.primaryComma.monzo)

            expect(name).toBe(symbol.primaryComma.name)
        })
    })

    it("is the case that the ratio for each symbol agrees with its monzo", () => {
        JI_SYMBOLS.forEach(symbol => {
            const monzo = computeMonzoFromRatio(symbol.primaryComma.ratio)

            expect(monzo).toEqual(symbol.primaryComma.monzo)
        })
    })
})

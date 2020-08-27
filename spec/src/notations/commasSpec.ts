import { computeCentsFromRatio, computeMonzoFromRatio, computeRatioFromMonzo } from "../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../src/general/code"
import { computeCommaName } from "../../../src/notations/commaName"
import { SAGITTAL_COMMAS } from "../../../src/notations/commas"

describe("JI_SYMBOLS", () => {
    it("is the case that the cents for each symbol agrees with its monzo", () => {
        SAGITTAL_COMMAS.forEach(comma => {
            const ratio = computeRatioFromMonzo(comma.monzo)
            const cents = computeCentsFromRatio(ratio)

            expect(cents).toBeCloseToTyped(comma.cents, ACCURACY_THRESHOLD)
        })
    })

    it("is the case that the name for each symbol agrees with its monzo", () => {
        SAGITTAL_COMMAS.forEach(comma => {
            const name = computeCommaName(comma.monzo)

            expect(name).toBe(comma.name)
        })
    })

    it("is the case that the ratio for each symbol agrees with its monzo", () => {
        SAGITTAL_COMMAS.forEach(comma => {
            const monzo = computeMonzoFromRatio(comma.ratio)

            expect(monzo).toEqual(comma.monzo)
        })
    })
})

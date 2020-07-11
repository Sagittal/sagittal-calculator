import { computeApotomeSlope } from "../../../../src/utilities/comma/apotomeSlope"
import { ACCURACY_THRESHOLD } from "../../../../src/utilities/constants"
import { Monzo } from "../../../../src/utilities/comma/types"

describe("computeApotomeSlope", () => {
    it("gives the amount that the comma changes by when tempering the apotome", () => {
        const monzo: Monzo = [-15, 8, 1] as Monzo

        const result = computeApotomeSlope(monzo)

        expect(result).toBeCloseTo(7.87970229329454, ACCURACY_THRESHOLD)
    })
})

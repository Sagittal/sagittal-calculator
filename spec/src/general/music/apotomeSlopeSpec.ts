import { computeApotomeSlope, Monzo } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code"

describe("computeApotomeSlope", () => {
    it("gives the amount that the comma changes by when tempering the apotome", () => {
        const monzo: Monzo = [-15, 8, 1] as Monzo

        const actual = computeApotomeSlope(monzo)

        const expected = 7.87970229329454
        expect(actual).toBeCloseTo(expected, ACCURACY_THRESHOLD)
    })
})

import { ACCURACY_THRESHOLD } from "../../../../src/general/code/constants"
import { Monzo } from "../../../../src/general/music"
import { computeApotomeSlope } from "../../../../src/general/music/apotomeSlope"

describe("computeApotomeSlope", () => {
    it("gives the amount that the comma changes by when tempering the apotome", () => {
        const monzo: Monzo = [-15, 8, 1] as Monzo

        const result = computeApotomeSlope(monzo)

        expect(result).toBeCloseTo(7.87970229329454, ACCURACY_THRESHOLD)
    })
})

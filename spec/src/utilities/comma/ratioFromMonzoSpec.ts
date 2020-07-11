import { computeRatioFromMonzo } from "../../../../src/utilities/comma/ratioFromMonzo"
import { Monzo } from "../../../../src/utilities/comma/types"
import { Ratio } from "../../../../src/utilities/types"

describe("ratioFromMonzo", () => {
    it("converts a monzo into a two-element array representing the numerator and denominator", () => {
        const monzo = [-4, 9, -2, -2] as Monzo

        const result = computeRatioFromMonzo(monzo)

        expect(result).toEqual([19683, 19600] as Ratio)
    })
})

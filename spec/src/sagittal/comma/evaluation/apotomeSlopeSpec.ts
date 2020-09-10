import { Monzo } from "../../../../../src/general"
import { ApotomeSlope } from "../../../../../src/sagittal"
import { computeApotomeSlope } from "../../../../../src/sagittal/comma/evaluation"

describe("computeApotomeSlope", () => {
    it("gives the amount that the comma changes by when tempering the apotome", () => {
        const monzo: Monzo = [-15, 8, 1] as Monzo

        const actual = computeApotomeSlope({ monzo })

        const expected = 7.87970229329454 as ApotomeSlope
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for monzos without three exponents", () => {
        const monzo: Monzo = [] as Monzo

        const actual = computeApotomeSlope({ monzo })

        const expected = 0 as ApotomeSlope
        expect(actual).toBeCloseToTyped(expected)
    })
})

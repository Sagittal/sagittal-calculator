import {computeMonzoFromRatio} from "../../../../src/utilities/comma/monzoFromRatio"

describe("monzoFromRatio", () => {
    it("given a ratio in the form of an array of the numerator and denominator, returns it as a monzo", () => {
        const result = computeMonzoFromRatio([4, 5])

        expect(result).toEqual([2, 0, -1])
    })

    it("works for 1/1", () => {
        const result = computeMonzoFromRatio([1, 1])

        expect(result).toEqual([])
    })

    it("works for ratios where the numerator is 1", () => {
        const result = computeMonzoFromRatio([1, 5])

        expect(result).toEqual([0, 0, -1])
    })

    it("works for ratios where the denominator is 1", () => {
        const result = computeMonzoFromRatio([5, 1])

        expect(result).toEqual([0, 0, 1])
    })
})

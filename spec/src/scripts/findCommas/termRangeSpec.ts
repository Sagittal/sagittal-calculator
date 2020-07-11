import { computeTermRange } from "../../../../src/scripts/findCommas/termRange"
import { Prime } from "../../../../src/utilities/types"

describe("computeTermRange", () => {
    it("gives the valid range of the term of the monzo for a prime given a maximum 5-rough sopfr and a maximum 5-rough copfr where the 5-rough copfr is the limiting factor", () => {
        const prime = 11 as Prime
        const maximumFiveRoughSopfr = 51
        const maximumFiveRoughCopfr = 3

        const result = computeTermRange(prime, { maximumFiveRoughSopfr, maximumFiveRoughCopfr })

        expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3])
    })

    it("gives the valid range of the term of the monzo for a prime given a maximum 5-rough sopfr and a maximum 5-rough copfr where the 5-rough sopfr is the limiting factor", () => {
        const prime = 11 as Prime
        const maximumFiveRoughSopfr = 30
        const maximumFiveRoughCopfr = 3

        const result = computeTermRange(prime, { maximumFiveRoughSopfr, maximumFiveRoughCopfr })

        expect(result).toEqual([-2, -1, 0, 1, 2])
    })

    it("gives the valid range of the term of the monzo for a prime given a maximum 5-rough sopfr", () => {
        const prime = 11 as Prime
        const maximumFiveRoughSopfr = 51

        const result = computeTermRange(prime, { maximumFiveRoughSopfr })

        expect(result).toEqual([-4, -3, -2, -1, 0, 1, 2, 3, 4])
    })

    it("gives the valid range of the term of the monzo for a prime given a maximum 5-rough copfr", () => {
        const prime = 61 as Prime
        const maximumFiveRoughCopfr = 3

        const result = computeTermRange(prime, { maximumFiveRoughCopfr })

        expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3])
    })

    it("throws an error if neither maximum is provided", () => {
        const prime = 61 as Prime

        expect(() => computeTermRange(prime)).toThrowError("The range must be limited somehow.")
    })
})

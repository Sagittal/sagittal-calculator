const {computeTermRange} = require("../../../../src/findTinaPrimaryCommas/utilities/termRange")

describe("computeTermRange", () => {
    it("gives the valid range of the term of the monzo for a prime given a maximum SoPF>3 and a maximum CoPF>3 where the CoPF>3 is the limiting factor", () => {
        const prime = 11
        const maximumSopfgtt = 51
        const maximumCopfgtt = 3

        const result = computeTermRange(prime, {maximumSopfgtt, maximumCopfgtt})

        expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3])
    })

    it("gives the valid range of the term of the monzo for a prime given a maximum SoPF>3 and a maximum CoPF>3 where the SoPF>3 is the limiting factor", () => {
        const prime = 11
        const maximumSopfgtt = 30
        const maximumCopfgtt = 3

        const result = computeTermRange(prime, {maximumSopfgtt, maximumCopfgtt})

        expect(result).toEqual([-2, -1, 0, 1, 2])
    })

    it("gives the valid range of the term of the monzo for a prime given a maximum SoPF>3", () => {
        const prime = 11
        const maximumSopfgtt = 51

        const result = computeTermRange(prime, {maximumSopfgtt})

        expect(result).toEqual([-4, -3, -2, -1, 0, 1, 2, 3, 4])
    })

    it("gives the valid range of the term of the monzo for a prime given a maximum CoPF>3", () => {
        const prime = 61
        const maximumCopfgtt = 3

        const result = computeTermRange(prime, {maximumCopfgtt})

        expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3])
    })

    it("throws an error if neither maximum is provided", () => {
        const prime = 61

        expect(() => computeTermRange(prime)).toThrowError("The range must be limited somehow.")
    })
})

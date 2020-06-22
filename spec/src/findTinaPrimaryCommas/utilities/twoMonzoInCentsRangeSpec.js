const {computeTwoMonzoInCentsRange} = require("../../../../src/findTinaPrimaryCommas/utilities/twoMonzoInCentsRange")

describe("computeTwoMonzoInCentsRange", () => {
    it("given a 3-monzo, finds the (2-)monzo which is within the cents range", () => {
        const threeMonzo = [-6, 3, 5, -1]
        const lowerBound = 40.0
        const upperBound = 40.1

        const result = computeTwoMonzoInCentsRange(threeMonzo, lowerBound, upperBound)

        expect(result).toEqual([-8, -6, 3, 5, -1])
    })

    it("returns undefined if no (2-)monzo is within the cents range", () => {
        const threeMonzo = [-6, 3, 5, -1]
        const lowerBound = 40.1
        const upperBound = 40.2

        const result = computeTwoMonzoInCentsRange(threeMonzo, lowerBound, upperBound)

        expect(result).toBeUndefined()
    })

    it("throws an error if the cents range is greater than an octave (therefore more than one two monzo could be in range)", () => {
        const threeMonzo = [-6, 3, 5, -1]
        const lowerBound = 40.0
        const upperBound = 1240.1

        expect(() => computeTwoMonzoInCentsRange(threeMonzo, lowerBound, upperBound)).toThrowError("Cents range must be less than 1200.")
    })
})

import { Cents, computeMonzoInRange, Monzo } from "../../../../src/general/music"

describe("computeMonzoInRange", () => {
    it("given a 3-monzo, finds the (2-)monzo which is within the cents range", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo<3>
        const lowerBound = 40.0 as Cents
        const upperBound = 40.1 as Cents

        const actual = computeMonzoInRange(threeRoughMonzo, lowerBound, upperBound)

        const expected = [-8, -6, 3, 5, -1] as Monzo
        expect(actual).toEqual(expected)
    })

    it("returns undefined if no (2-)monzo is within the cents range", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo<3>
        const lowerBound = 40.1 as Cents
        const upperBound = 40.2 as Cents

        const actual = computeMonzoInRange(threeRoughMonzo, lowerBound, upperBound)

        expect(actual).toBeUndefined()
    })

    it("throws an error if the cents range is greater than an octave (therefore more than one two monzo could be in range)", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo<3>
        const lowerBound = 40.0 as Cents
        const upperBound = 1240.1 as Cents

        expect(() => computeMonzoInRange(threeRoughMonzo, lowerBound, upperBound)).toThrowError("Cents range must be less than 1200.")
    })
})

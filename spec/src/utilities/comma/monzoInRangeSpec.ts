import { computeMonzoInRange } from "../../../../src/utilities/comma/monzoInRange"
import { Monzo } from "../../../../src/utilities/comma/types"
import { Cents } from "../../../../src/utilities/types"

describe("computeMonzoInRange", () => {
    it("given a 3-monzo, finds the (2-)monzo which is within the cents range", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo
        const lowerBound = 40.0 as Cents
        const upperBound = 40.1 as Cents

        const result = computeMonzoInRange(threeRoughMonzo, lowerBound, upperBound)

        expect(result).toEqual([-8, -6, 3, 5, -1] as Monzo)
    })

    it("returns undefined if no (2-)monzo is within the cents range", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo
        const lowerBound = 40.1 as Cents
        const upperBound = 40.2 as Cents

        const result = computeMonzoInRange(threeRoughMonzo, lowerBound, upperBound)

        expect(result).toBeUndefined()
    })

    it("throws an error if the cents range is greater than an octave (therefore more than one two monzo could be in range)", () => {
        const threeRoughMonzo = [-6, 3, 5, -1] as Monzo
        const lowerBound = 40.0 as Cents
        const upperBound = 1240.1 as Cents

        expect(() => computeMonzoInRange(threeRoughMonzo, lowerBound, upperBound)).toThrowError("Cents range must be less than 1200.")
    })
})

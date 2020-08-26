import { computeIsCloseTo } from "../../../../src/general/code"
import { Integer } from "../../../../src/general/math"

describe("computeIsCloseTo", () => {
    it("returns true if the two values are very close", () => {
        const valueOne = 5.68598945
        const valueTwo = 5.68598948

        const actual = computeIsCloseTo(valueOne, valueTwo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the two values are not very close", () => {
        const valueOne = 5.68598945
        const valueTwo = 5.68598845

        const actual = computeIsCloseTo(valueOne, valueTwo)

        expect(actual).toBeFalsy()
    })

    it("accepts an accuracy threshold argument", () => {
        const valueOne = 5.6862
        const valueTwo = 5.6858

        const actual = computeIsCloseTo(valueOne, valueTwo, 3 as Integer)

        expect(actual).toBeTruthy()
    })
})

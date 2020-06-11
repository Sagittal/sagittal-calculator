const {computeIsCloseTo} = require("../../../../src/boundsAnalysis/utilities/isCloseTo")

describe("computeIsCloseTo", () => {
    it("returns true if the two values are very close", () => {
        const valueOne = 5.68598945
        const valueTwo = 5.68598948

        const result = computeIsCloseTo(valueOne, valueTwo)

        expect(result).toBeTruthy()
    })

    it("returns false if the two values are not very close", () => {
        const valueOne = 5.68598945
        const valueTwo = 5.68598845

        const result = computeIsCloseTo(valueOne, valueTwo)

        expect(result).toBeFalsy()
    })

    it("accepts an accuracy threshold argument", () => {
        const valueOne = 5.6862
        const valueTwo = 5.6858

        const result = computeIsCloseTo(valueOne, valueTwo, 3)

        expect(result).toBeTruthy()
    })
})

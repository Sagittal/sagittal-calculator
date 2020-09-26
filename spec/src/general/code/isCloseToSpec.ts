import { isCloseTo, MAX_JAVASCRIPT_PRECISION, Precision } from "../../../../src/general/code"

describe("isCloseTo", (): void => {
    it("returns true if the two values are very close", (): void => {
        const valueOne = 5.68598945
        const valueTwo = 5.68598948

        const actual = isCloseTo(valueOne, valueTwo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the two values are not very close", (): void => {
        const valueOne = 5.68598945
        const valueTwo = 5.68597945

        const actual = isCloseTo(valueOne, valueTwo)

        expect(actual).toBeFalsy()
    })

    it("an example of values which shouldn't be considered close by default precision, but are", (): void => {
        const valueOne = 1.0144785195688801
        const valueTwo = 1.0144775390625

        const actual = isCloseTo(valueOne, valueTwo)

        expect(actual).toBeTruthy()
        // you need to move precision up to 6 for this to be false.
        // we thought it was at 6, but my implementation of isCloseTo was off by 1.
        // it was actually 5 all along. I'd like to get us up to 6, but that causes dozens of tests to fail, because
        // I'd been building upon a faulty tolerance of accuracy this whole time.
    })

    it("accepts an accuracy threshold argument", (): void => {
        const valueOne = 5.6862
        const valueTwo = 5.6858
        const precision = 3 as Precision

        const actual = isCloseTo(valueOne, valueTwo, precision)

        expect(actual).toBeTruthy()
    })

    it("when given the max precision, returns true if the values are equal", (): void => {
        const valueOne = 5.6862686268626862656265626562656265626562656265
        const valueTwo = 5.6862686268626862656265626562656265626562656265
        const precision = MAX_JAVASCRIPT_PRECISION

        const actual = isCloseTo(valueOne, valueTwo, precision)

        expect(actual).toBeTruthy()
    })

    it("when given the max precision, returns false if the values are not equal, within the ability for JavaScript to discern", (): void => {
        const valueOne = 5.686268697656264
        const valueTwo = 5.686268697656265
        const precision = MAX_JAVASCRIPT_PRECISION

        const actual = isCloseTo(valueOne, valueTwo, precision)

        expect(actual).toBeFalsy()
    })

    it("when given the max precision, returns true even if the values aren't equal, if they are beyond max javascript precision", (): void => {
        const valueOne = 5.6862686971656264
        const valueTwo = 5.6862686971656265
        const precision = MAX_JAVASCRIPT_PRECISION

        const actual = isCloseTo(valueOne, valueTwo, precision)

        expect(actual).toBeTruthy()
    })

    it("works when both values are undefined", (): void => {
        const valueOne = undefined
        const valueTwo = undefined

        const actual = isCloseTo(valueOne, valueTwo)

        expect(actual).toBeTruthy()
    })

    it("works when one value is undefined", (): void => {
        const valueOne = undefined
        const valueTwo = 4

        const actual = isCloseTo(valueOne, valueTwo)

        expect(actual).toBeFalsy()
    })

    it("works when the other value is undefined", (): void => {
        const valueOne = 8
        const valueTwo = undefined

        const actual = isCloseTo(valueOne, valueTwo)

        expect(actual).toBeFalsy()
    })
})

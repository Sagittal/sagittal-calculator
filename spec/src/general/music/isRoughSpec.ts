import { computeIsRough } from "../../../../src/general"
import { Integer } from "../../../../src/general/math"

describe("isRough", () => {
    it("works for integers", () => {
        const integer = 221 as Integer
        const roughness = 11 as Integer

        const actual = computeIsRough(integer, roughness)

        expect(actual).toBeTruthy()
    })

    it("works for integers, example where it is false", () => {
        const integer = 33 as Integer
        const roughness = 5 as Integer

        const actual = computeIsRough(integer, roughness)

        expect(actual).toBeFalsy()
    })

    it("1 is always rough", () => {
        const integer = 1 as Integer
        const roughness = 5 as Integer

        const actual = computeIsRough(integer, roughness)

        expect(actual).toBeTruthy()
    })

    it("trying to find whatever edge cases causes this insanely faster implementation to disagree with the old way", () => {
        const integer = 10 as Integer
        const roughness = 11 as Integer

        const actual = computeIsRough(integer, roughness)

        expect(actual).toBeFalsy()
    })

    it("even more examples", () => {
        const integer = 11 as Integer
        const roughness = 11 as Integer

        const actual = computeIsRough(integer, roughness)

        expect(actual).toBeTruthy()
    })
})

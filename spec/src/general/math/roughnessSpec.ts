import { computeIsRoughInteger } from "../../../../src/general"
import { Integer, Roughness } from "../../../../src/general/math"
import { computeRoughInteger } from "../../../../src/general/math/roughness"

describe("isRoughInteger", () => {
    it("works for integers", () => {
        const integer = 221 as Integer
        const roughness = 11 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })

    it("works for integers, example where it is false", () => {
        const integer = 33 as Integer
        const roughness = 5 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeFalsy()
    })

    it("1 is always rough", () => {
        const integer = 1 as Integer
        const roughness = 5 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })

    it("another example", () => {
        const integer = 10 as Integer
        const roughness = 11 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeFalsy()
    })

    it("even more examples", () => {
        const integer = 11 as Integer
        const roughness = 11 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })
})

describe("computeRoughInteger", () => {
    it("roughens the number to the desired roughness", () => {
        const integer = 1155 as Integer      // 3 * 5 * 7 * 11
        const roughness = 7 as Roughness

        const actual = computeRoughInteger(integer, roughness)

        const expected = 77 as Integer
        expect(actual).toBe(expected)
    })
})

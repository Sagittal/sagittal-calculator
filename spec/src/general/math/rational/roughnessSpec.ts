import { isRoughInteger } from "../../../../../src/general"
import { Integer, Roughness } from "../../../../../src/general/math"
import { computeRoughInteger } from "../../../../../src/general/math/rational"

describe("isRoughInteger", (): void => {
    it("works for integers", (): void => {
        const integer = 221 as Integer
        const roughness = 11 as Roughness

        const actual = isRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })

    it("works for integers, example where it is false", (): void => {
        const integer = 33 as Integer
        const roughness = 5 as Roughness

        const actual = isRoughInteger(integer, roughness)

        expect(actual).toBeFalsy()
    })

    it("1 is always rough", (): void => {
        const integer = 1 as Integer
        const roughness = 5 as Roughness

        const actual = isRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })

    it("another example", (): void => {
        const integer = 10 as Integer
        const roughness = 11 as Roughness

        const actual = isRoughInteger(integer, roughness)

        expect(actual).toBeFalsy()
    })

    it("even more examples", (): void => {
        const integer = 11 as Integer
        const roughness = 11 as Roughness

        const actual = isRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })
})

describe("computeRoughInteger", (): void => {
    it("roughens the number to the desired roughness", (): void => {
        const integer = 1155 as Integer      // 3 * 5 * 7 * 11
        const roughness = 7 as Roughness

        const actual = computeRoughInteger(integer, roughness)

        const expected = 77 as Integer
        expect(actual).toBe(expected)
    })
})


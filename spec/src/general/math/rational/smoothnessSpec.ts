import { Integer, Smoothness } from "../../../../../src/general/math"
import { computeIsSmoothInteger } from "../../../../../src/general/math/rational/smoothness"

describe("computeIsSmoothInteger", (): void => {
    it("works, example when it is true (no prime factors > smoothness)", (): void => {
        const integer = 35 as Integer
        const smoothness = 7 as 7 & Smoothness

        const actual = computeIsSmoothInteger(integer, smoothness)

        expect(actual).toBeTruthy()
    })

    it("works, example when it is false (some prime factors > smoothness)", (): void => {
        const integer = 35 as Integer
        const smoothness = 5 as 5 & Smoothness

        const actual = computeIsSmoothInteger(integer, smoothness)

        expect(actual).toBeFalsy()
    })
})

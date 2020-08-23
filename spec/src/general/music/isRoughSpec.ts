import { computeIsRough } from "../../../../src/general"

describe("isRough", () => {
    it("works for integers", () => {
        const integer = 221
        const roughness = 11

        const result = computeIsRough(integer, roughness)

        expect(result).toBeTruthy()
    })

    it("works for integers, example where it is false", () => {
        const integer = 33
        const roughness = 5

        const result = computeIsRough(integer, roughness)

        expect(result).toBeFalsy()
    })

    it("1 is always rough", () => {
        const integer = 1
        const roughness = 5

        const result = computeIsRough(integer, roughness)

        expect(result).toBeTruthy()
    })

    it("trying to find whatever edge cases causes this insanely faster implementation to disagree with the old way", () => {
        const integer = 10
        const roughness = 11

        const result = computeIsRough(integer, roughness)

        expect(result).toBeFalsy()
    })

    it("even more examples", () => {
        const integer = 11
        const roughness = 11

        const result = computeIsRough(integer, roughness)

        expect(result).toBeTruthy()
    })
})

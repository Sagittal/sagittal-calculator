import { computeRoughNumberMonzo, Monzo } from "../../../../src/general/math"

describe("computeRoughNumberMonzo", () => {
    it("roughens the monzo to the requested roughness", () => {
        const monzo = [5, 6, 1, 0, 3] as Monzo
        const roughness = 5

        const actual = computeRoughNumberMonzo(monzo, roughness)

        const expected = [0, 0, 1, 0, 3] as Monzo
        expect(actual).toEqual(expected)
    })

    // it("only really makes sense to give a prime number as the roughness, but any number should work", () => {
    //     const monzo = [5, 6, 1, 0, 3] as Monzo
    //     const roughness = 4
    //
    //     const actual = computeRoughNumberMonzo(monzo, roughness)
    //
    //     const expected = [0, 0, 1, 0, 3] as Monzo
    //     expect(actual).toEqual(expected)
    // })
})

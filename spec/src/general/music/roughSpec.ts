import { computeRoughNumberMonzo, Monzo } from "../../../../src/general/music"

describe("computeRoughNumberMonzo", () => {
    it("roughens the monzo to the requested roughness", () => {
        const monzo = [5, 6, 1, 0, 3] as Monzo
        const roughness = 5

        const actual = computeRoughNumberMonzo(monzo, roughness)

        const expected = [0, 0, 1, 0, 3] as Monzo
        expect(actual).toEqual(expected)
    })
})

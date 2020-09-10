import { computeRoughNumberMonzo, Monzo } from "../../../../src/general/math"
import { Roughness } from "../../../../src/general/math/types"

describe("computeRoughNumberMonzo", () => {
    it("roughens the monzo to the requested roughness", () => {
        const monzo = [5, 6, 1, 0, 3] as Monzo
        const roughness = 5 as 5 & Roughness

        const actual = computeRoughNumberMonzo(monzo, roughness)

        const expected = [0, 0, 1, 0, 3] as Monzo
        expect(actual).toEqual(expected)
    })
})

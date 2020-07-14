import { Monzo } from "../../../../src/general/music"
import { computeRoughNumberMonzo } from "../../../../src/general/music/rough"

describe("computeRoughNumberMonzo", () => {
    it("roughens the monzo to the requested roughness", () => {
        const monzo = [5, 6, 1, 0, 3] as Monzo
        const roughness = 5

        const result = computeRoughNumberMonzo(monzo, roughness)

        expect(result).toEqual([0, 0, 1, 0, 3] as Monzo)
    })
})

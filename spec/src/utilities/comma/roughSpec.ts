import { computeRoughNumberMonzo } from "../../../../src/utilities/comma/rough"
import { Monzo } from "../../../../src/utilities/comma/types"

describe("computeRoughNumberMonzo", () => {
    it("roughens the monzo to the requested roughness", () => {
        const monzo = [5, 6, 1, 0, 3] as Monzo
        const roughness = 5

        const result = computeRoughNumberMonzo(monzo, roughness)

        expect(result).toEqual([0, 0, 1, 0, 3] as Monzo)
    })
})

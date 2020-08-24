import { computeMonzoFromRatio, computeRatioFromMonzo } from "../../../../src/general"
import { COMMA_POPULARITIES } from "../../../../src/general/music"

describe("COMMA_POPULARITIES", () => {
    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly when only top is 80 or less", () => {
        const originalRatios = COMMA_POPULARITIES.map(popularity => popularity.fiveRoughRatio)

        const monzos = originalRatios.map(computeMonzoFromRatio)
        const ratios = monzos.map(computeRatioFromMonzo)

        expect(ratios).toEqual(originalRatios)
    })

    // TODO: Could check that the comma popularities' fractional ranks are correct
    //  using the new fractional ranking utility
})

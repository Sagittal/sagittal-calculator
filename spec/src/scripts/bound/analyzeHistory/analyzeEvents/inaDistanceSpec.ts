import { Cents, Multiplier } from "../../../../../../src/general"
import { Ina, Level } from "../../../../../../src/sagittal"
import { computeInaDistance } from "../../../../../../src/scripts/bound/analyzeHistory"

describe("inaDistance", (): void => {
    it("returns the distance as a proportion of the size of the ina at that level", (): void => {
        const distance: Cents = 0.1 as Cents

        expect(computeInaDistance(distance, Level.MEDIUM)).toBeCloseToTyped(0.018472 as Multiplier<Ina>)
        expect(computeInaDistance(distance, Level.HIGH)).toBeCloseToTyped(0.041342 as Multiplier<Ina>)
        expect(computeInaDistance(distance, Level.ULTRA)).toBeCloseToTyped(0.051018 as Multiplier<Ina>)
        expect(computeInaDistance(distance, Level.EXTREME)).toBeCloseToTyped(0.204952 as Multiplier<Ina>)
        expect(computeInaDistance(distance, Level.INSANE)).toBeCloseToTyped(0.711615 as Multiplier<Ina>)
    })
})

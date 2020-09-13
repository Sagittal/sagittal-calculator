import { Cents, Multiplier } from "../../../../../../src/general"
import { Ina, Level } from "../../../../../../src/sagittal"
import { computeInaDistance } from "../../../../../../src/scripts/bound/analyzeHistory"

describe("inaDistance", () => {
    it("returns the distance as a proportion of the size of the ina at that level", () => {
        const distance: Cents = 0.1 as Cents

        expect(computeInaDistance(distance, Level.MEDIUM)).toBeCloseToTyped(0.0184720929595055 as Multiplier<Ina>)
        expect(computeInaDistance(distance, Level.HIGH)).toBeCloseToTyped(0.041342303290321826 as Multiplier<Ina>)
        expect(computeInaDistance(distance, Level.ULTRA)).toBeCloseToTyped(0.05101816150720566 as Multiplier<Ina>)
        expect(computeInaDistance(distance, Level.EXTREME)).toBeCloseToTyped(0.20495226950308482 as Multiplier<Ina>)
        expect(computeInaDistance(distance, Level.INSANE)).toBeCloseToTyped(0.7116153906780928 as Multiplier<Ina>)
    })
})

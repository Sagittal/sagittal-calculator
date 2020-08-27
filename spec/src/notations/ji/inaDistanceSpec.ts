import { Cents, Proportion } from "../../../../src/general"
import { ACCURACY_THRESHOLD } from "../../../../src/general/code"
import { computeInaDistance, Level } from "../../../../src/notations/ji"

describe("inaDistance", () => {
    it("returns the distance as a proportion of the size of the ina at that level", () => {
        const distance: Cents = 0.1 as Cents

        expect(computeInaDistance(distance, Level.MEDIUM))
            .toBeCloseToTyped(0.0184720929595055 as Proportion, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, Level.HIGH))
            .toBeCloseToTyped(0.041342303290321826 as Proportion, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, Level.ULTRA))
            .toBeCloseToTyped(0.05101816150720566 as Proportion, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, Level.EXTREME))
            .toBeCloseToTyped(0.20495226950308482 as Proportion, ACCURACY_THRESHOLD)
        expect(computeInaDistance(distance, Level.INSANE))
            .toBeCloseToTyped(0.7116153906780928 as Proportion, ACCURACY_THRESHOLD)
    })
})

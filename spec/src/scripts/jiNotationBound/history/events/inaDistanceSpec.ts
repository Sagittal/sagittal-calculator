import { Cents, Multiplier } from "../../../../../../src/general"
import { Ina, JiNotationLevel } from "../../../../../../src/sagittal"
import { computeInaDistance } from "../../../../../../src/scripts/jiNotationBound/history"

describe("inaDistance", (): void => {
    it("returns the distance as a proportion of the size of the ina at that JI notation level", (): void => {
        const distance: Cents = 0.1 as Cents

        expect(computeInaDistance(distance, JiNotationLevel.MEDIUM)).toBeCloseToTyped(0.018472 as Multiplier<Ina>)
        expect(computeInaDistance(distance, JiNotationLevel.HIGH)).toBeCloseToTyped(0.041342 as Multiplier<Ina>)
        expect(computeInaDistance(distance, JiNotationLevel.ULTRA)).toBeCloseToTyped(0.051018 as Multiplier<Ina>)
        expect(computeInaDistance(distance, JiNotationLevel.EXTREME)).toBeCloseToTyped(0.204952 as Multiplier<Ina>)
        expect(computeInaDistance(distance, JiNotationLevel.INSANE)).toBeCloseToTyped(0.711615 as Multiplier<Ina>)
    })
})

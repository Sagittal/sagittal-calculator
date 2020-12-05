import {Abs, Cents, Multiplier} from "@sagittal/general"
import {Ina, JiNotationLevelId} from "../../../../../../src/sagittal"
import {computeInaDistance} from "../../../../../../src/scripts/jiNotationBoundClass/history"

describe("inaDistance", (): void => {
    it("returns the distance as a proportion of the size of the ina at that JI notation level", (): void => {
        const distance: Abs<Cents> = 0.1 as Abs<Cents>

        expect(computeInaDistance(distance, JiNotationLevelId.MEDIUM)).toBeCloseToTyped(0.018472 as Multiplier<Ina>)
        expect(computeInaDistance(distance, JiNotationLevelId.HIGH)).toBeCloseToTyped(0.041342 as Multiplier<Ina>)
        expect(computeInaDistance(distance, JiNotationLevelId.ULTRA)).toBeCloseToTyped(0.051018 as Multiplier<Ina>)
        expect(computeInaDistance(distance, JiNotationLevelId.EXTREME)).toBeCloseToTyped(0.204952 as Multiplier<Ina>)
        expect(computeInaDistance(distance, JiNotationLevelId.INSANE)).toBeCloseToTyped(0.711615 as Multiplier<Ina>)
    })
})

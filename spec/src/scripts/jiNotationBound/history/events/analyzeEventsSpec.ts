import { Abs, Multiplier } from "../../../../../../src/general"
import { Cents } from "../../../../../../src/general/music"
import { BoundType, Ina, JiNotationLevel } from "../../../../../../src/sagittal/notations/ji"
import { BoundHistory } from "../../../../../../src/scripts/jiNotationBound/histories"
import { analyzeBoundEvents } from "../../../../../../src/scripts/jiNotationBound/history/events"
import { RANKS } from "../../../../../../src/scripts/jiNotationBound/ranks"
import {
    boundEventAnalysisFixture,
    boundEventFixture,
} from "../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("analyzeBoundEvents", (): void => {
    it("adds some analysis properties to each event: rank, distance, and exact", (): void => {
        const boundHistory: BoundHistory = [
            {
                ...boundEventFixture,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
            },
            {
                ...boundEventFixture,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
            },
            {
                ...boundEventFixture,
                boundType: BoundType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                cents: 10.1 as Cents,
            },
        ]
        const actualJiNotationBoundCents = 10.2 as Cents

        const actual = analyzeBoundEvents(boundHistory, actualJiNotationBoundCents)

        const expected = [
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.INA_MIDPOINT,
                jiNotationLevel: JiNotationLevel.HIGH,
                cents: 10.0 as Cents,
                rank: RANKS[ BoundType.INA_MIDPOINT ],
                exact: false,
                distance: 0.000000 as Abs<Cents>,
                inaDistance: 0 as Multiplier<Ina>,
            },
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.SIZE_CATEGORY_BOUND,
                jiNotationLevel: JiNotationLevel.ULTRA,
                cents: 10.2 as Cents,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                exact: true,
                distance: 0.199999 as Abs<Cents>,
                inaDistance: 0.102036 as Multiplier<Ina>,
            },
            {
                ...boundEventAnalysisFixture,
                boundType: BoundType.COMMA_MEAN,
                jiNotationLevel: JiNotationLevel.EXTREME,
                cents: 10.1 as Cents,
                rank: RANKS[ BoundType.COMMA_MEAN ],
                exact: false,
                distance: 0.099999 as Abs<Cents>,
                inaDistance: 0.204952 as Multiplier<Ina>,
            },
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})

import { Name, Pitch } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import { Bound, BoundType } from "../../../../../src/sagittal/notations/ji"
import { ULTRA_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { computeInitialEventConsolidation } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/initialEventConsolidation"
import { BoundEventConsolidation } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/types"
import { BoundEvent } from "../../../../../src/scripts/jiNotationBound/histories"
import { BoundEventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { boundEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeInitialEventConsolidation", (): void => {
    let actual: BoundEventConsolidation
    const boundEventAnalysis: BoundEventAnalysis = {
        ...boundEventAnalysisFixture,
        boundType: BoundType.INA_MIDPOINT,
        name: "12.5°58" as Name<Bound>,
        rank: RANKS[ BoundType.COMMA_MEAN ],
        pitch: { monzo: APOTOME.monzo, scaler: [12.5, ULTRA_EDA] } as Pitch<{ rational: false }>,
    }

    beforeEach((): void => {
        actual = computeInitialEventConsolidation(boundEventAnalysis)
    })

    it("initializes the rank related fields to the worst rank (so that there's nowhere to go but up when updating them with data from the bound history analyses", (): void => {
        expect(actual.rankOfBestRankedEventInAnyMemberHistory).toBe(RANKS[ BoundType.SIZE_CATEGORY_BOUND ])
        expect(actual.rankOfBestRankedMemberHistory).toBe(RANKS[ BoundType.SIZE_CATEGORY_BOUND ])
    })

    it("strips off the rank that was created in the analyze step, replacing it with the rank measurements that are appropriate for the bound history consolidation", (): void => {
        expect((actual as BoundEvent as BoundEventAnalysis).rank).toBeUndefined()
    })

    it("initializes to assume that it is not a member of a bound history which is possible (if one ever comes across which is possible, then it never goes back to being considered not possible)", (): void => {
        expect(actual.isPossibleBoundHistoryMember).toBeFalsy()
    })

    it("initializes to assume that it is not a member of the best possible bound history (if one ever comes across which is possible, then it never goes back to being considered not possible)", (): void => {
        expect(actual.isBestPossibleBoundHistoryMember).toBeFalsy()
    })

    it("initializes with an empty list of next events", (): void => {
        expect(actual.nextBoundEvents).toEqual([])
    })

    it("preserves most of the original information from the original bound event", (): void => {
        expect(actual.boundType).toBe(boundEventAnalysis.boundType)
        expect(actual.jiNotationLevel).toBe(boundEventAnalysis.jiNotationLevel)
        expect(actual.name).toBe(boundEventAnalysis.name)
        expect(actual.pitch).toBe(boundEventAnalysis.pitch)
    })
})

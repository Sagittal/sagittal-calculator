import {APOTOME, Name, Scamon} from "@sagittal/general"
import {BoundType, JiNotationBound} from "../../../../../src/sagittal"
import {ULTRA_EDA} from "../../../../../src/sagittal/notations/ji/levelEdas"
import {computeInitialEventConsolidation} from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/initialEventConsolidation"
import {BoundEventConsolidation} from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/types"
import {BoundEvent} from "../../../../../src/scripts/jiNotationBoundClass/histories"
import {BoundEventAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/history"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {boundEventAnalysisFixture} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeInitialEventConsolidation", (): void => {
    let actual: BoundEventConsolidation
    const boundEventAnalysis: BoundEventAnalysis = {
        ...boundEventAnalysisFixture,
        boundType: BoundType.INA_MIDPOINT,
        name: "12.5°58" as Name<JiNotationBound>,
        rank: RANKS[BoundType.COMMA_MEAN],
        pitch: {monzo: APOTOME.monzo, scaler: [12.5, ULTRA_EDA]} as Scamon<{rational: false}>,
    }

    beforeEach((): void => {
        actual = computeInitialEventConsolidation(boundEventAnalysis)
    })

    it("initializes the rank related fields to the worst rank (so that there's nowhere to go but up when updating them with data from the bound class history analyses", (): void => {
        expect(actual.rankOfBestRankedEventInAnyMemberHistory).toBe(RANKS[BoundType.SIZE_CATEGORY_BOUND])
        expect(actual.rankOfBestRankedMemberHistory).toBe(RANKS[BoundType.SIZE_CATEGORY_BOUND])
    })

    it("strips off the rank that was created in the analyze step, replacing it with the rank measurements that are appropriate for the bound class history consolidation", (): void => {
        expect((actual as BoundEvent as BoundEventAnalysis).rank).toBeUndefined()
    })

    it("initializes to assume that it is not a member of a bound class history which is possible (if one ever comes across which is possible, then it never goes back to being considered not possible)", (): void => {
        expect(actual.isPossibleBoundHistoryMember).toBeFalsy()
    })

    it("initializes to assume that it is not a member of the best possible bound class history (if one ever comes across which is possible, then it never goes back to being considered not possible)", (): void => {
        expect(actual.isBestPossibleBoundHistoryMember).toBeFalsy()
    })

    it("initializes with an empty list of next events", (): void => {
        expect(actual.nextBoundEvents).toEqual([])
    })

    it("preserves most of the original information from the original bound class event", (): void => {
        expect(actual.boundType).toBe(boundEventAnalysis.boundType)
        expect(actual.jiNotationLevel).toBe(boundEventAnalysis.jiNotationLevel)
        expect(actual.name).toBe(boundEventAnalysis.name)
        expect(actual.pitch).toBe(boundEventAnalysis.pitch)
    })
})

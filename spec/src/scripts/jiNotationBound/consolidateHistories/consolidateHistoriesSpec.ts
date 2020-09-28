import { Cents, Multiplier, Name } from "../../../../../src/general"
import { Bound, BoundType, JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { consolidateBoundHistories } from "../../../../../src/scripts/jiNotationBound/consolidateHistories"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import {
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
} from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("consolidateBoundHistories", (): void => {
    it("consolidates bound histories to collapse redundancies per JI notation level and show which bound events can lead into which events in the next JI notation level, and which ones are members of histories that are possible, and what the best rank is in any event that becomes part of this consolidation, and what the best rank of any bound history this bound event is a member of is, and membership in the best possible bound history", (): void => {
        const boundEventAnalysisAGoesToEventCAndD: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: "'/| )/|" as Name<Bound>,
            cents: 24.200000 as Cents,
            rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            exact: false,
        }
        const boundEventAnalysisBGoesToEventC: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.INA_MIDPOINT,
            name: "12.5°58" as Name<Bound>,
            cents: 24.333333 as Cents,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }
        const boundEventAnalysisC: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ",)/|_)/|" as Name<Bound>,
            cents: 24.581395 as Cents,
            rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            exact: false,
        }
        const boundEventAnalysisD: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "50.5°233" as Name<Bound>,
            cents: 24.151964 as Cents,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }
        const boundEventAnalysisCButWithBetterRank: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ",)/|_)/|" as Name<Bound>,
            cents: 24.581395 as Cents,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }

        const bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis = {
            ...boundHistoryAnalysisFixture,
            boundEventAnalyses: [
                boundEventAnalysisBGoesToEventC,
                boundEventAnalysisCButWithBetterRank,
            ],
            rank: RANKS[ BoundType.COMMA_MEAN ],
            possible: true,
            tinaError: 0 as Multiplier<Tina>,
            cents: 24.581395 as Cents,
        }
        const boundHistoryAnalyses: BoundHistoryAnalysis[] = [
            {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    boundEventAnalysisAGoesToEventCAndD,
                    boundEventAnalysisC,
                ],
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                possible: true,
                tinaError: 0 as Multiplier<Tina>,
                cents: 24.581395 as Cents,
            },
            bestPossibleBoundHistoryAnalysis,
            {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    boundEventAnalysisAGoesToEventCAndD,
                    boundEventAnalysisD,
                ],
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                possible: false,
                tinaError: 3.05589400712 as Multiplier<Tina>,
                cents: 24.151964 as Cents,
            },
            {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    boundEventAnalysisBGoesToEventC,
                ],
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                possible: false,
                tinaError: 2.26723955922 as Multiplier<Tina>,
                cents: 24.900000 as Cents,
            },
        ]

        const actual = consolidateBoundHistories(boundHistoryAnalyses, bestPossibleBoundHistoryAnalysis)

        const expected = {
            [ JiNotationLevel.ULTRA ]: [
                {
                    boundType: boundEventAnalysisAGoesToEventCAndD.boundType,
                    jiNotationLevel: boundEventAnalysisAGoesToEventCAndD.jiNotationLevel,
                    name: boundEventAnalysisAGoesToEventCAndD.name,
                    cents: boundEventAnalysisAGoesToEventCAndD.cents,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    nextBoundEvents: [
                        boundEventAnalysisC.name,
                        boundEventAnalysisD.name,
                    ] as Name<Bound>[],
                },
                {
                    boundType: boundEventAnalysisBGoesToEventC.boundType,
                    jiNotationLevel: boundEventAnalysisBGoesToEventC.jiNotationLevel,
                    name: boundEventAnalysisBGoesToEventC.name,
                    cents: boundEventAnalysisBGoesToEventC.cents,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    nextBoundEvents: [
                        boundEventAnalysisC.name,
                    ] as Name<Bound>[],
                },
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    boundType: boundEventAnalysisC.boundType,
                    jiNotationLevel: boundEventAnalysisC.jiNotationLevel,
                    name: boundEventAnalysisC.name,
                    cents: boundEventAnalysisC.cents,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    nextBoundEvents: [] as Name<Bound>[],
                },
                {
                    boundType: boundEventAnalysisD.boundType,
                    jiNotationLevel: boundEventAnalysisD.jiNotationLevel,
                    name: boundEventAnalysisD.name,
                    cents: boundEventAnalysisD.cents,
                    isPossibleBoundHistoryMember: false,
                    isBestPossibleBoundHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    nextBoundEvents: [] as Name<Bound>[],
                },
            ],
        }
        expect(actual).toEqual(expected)
    })
})

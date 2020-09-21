import { Cents, Multiplier, Name } from "../../../../../src/general"
import { BoundType, JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { consolidateBoundHistories } from "../../../../../src/scripts/jiNotationBound/consolidateHistories"
import { BoundPosition } from "../../../../../src/scripts/jiNotationBound/histories"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import {
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
} from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("consolidateBoundHistories", (): void => {
    it("consolidates bound histories to collapse redundancies per JI notation level and show which bound events can lead into which events in the next JI notation level, and which ones are members of histories that are possible, and what the best rank is in any event that becomes part of this consolidation, and what the best rank of any bound history this bound event is a member of is, and membership in the best possible bound history", (): void => {
        const boundEventAnalysisOneGoesToEventThreeAndFour: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: "'/| )/|" as Name<BoundPosition>,
            cents: 24.200000 as Cents,
            rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            exact: false,
        }
        const boundEventAnalysisTwoGoesToEventThree: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.INA_MIDPOINT,
            name: "12.5°58" as Name<BoundPosition>,
            cents: 24.333333 as Cents,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }
        const boundEventAnalysisThree: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ",)/|_)/|" as Name<BoundPosition>,
            cents: 24.581395 as Cents,
            rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            exact: false,
        }
        const boundEventAnalysisFour: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "50.5°233" as Name<BoundPosition>,
            cents: 24.151964 as Cents,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }
        const boundEventAnalysisThreeButWithBetterRank: BoundEventAnalysis = {
            ...boundEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ",)/|_)/|" as Name<BoundPosition>,
            cents: 24.581395 as Cents,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }

        const bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis = {
            ...boundHistoryAnalysisFixture,
            boundEventAnalyses: [
                boundEventAnalysisTwoGoesToEventThree,
                boundEventAnalysisThreeButWithBetterRank,
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
                    boundEventAnalysisOneGoesToEventThreeAndFour,
                    boundEventAnalysisThree,
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
                    boundEventAnalysisOneGoesToEventThreeAndFour,
                    boundEventAnalysisFour,
                ],
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                possible: false,
                tinaError: 3.05589400712 as Multiplier<Tina>,
                cents: 24.151964 as Cents,
            },
            {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    boundEventAnalysisTwoGoesToEventThree,
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
                    boundType: boundEventAnalysisOneGoesToEventThreeAndFour.boundType,
                    jiNotationLevel: boundEventAnalysisOneGoesToEventThreeAndFour.jiNotationLevel,
                    name: boundEventAnalysisOneGoesToEventThreeAndFour.name,
                    cents: boundEventAnalysisOneGoesToEventThreeAndFour.cents,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    nextBoundEvents: [
                        boundEventAnalysisThree.name,
                        boundEventAnalysisFour.name,
                    ] as Name<BoundPosition>[],
                },
                {
                    boundType: boundEventAnalysisTwoGoesToEventThree.boundType,
                    jiNotationLevel: boundEventAnalysisTwoGoesToEventThree.jiNotationLevel,
                    name: boundEventAnalysisTwoGoesToEventThree.name,
                    cents: boundEventAnalysisTwoGoesToEventThree.cents,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    nextBoundEvents: [
                        boundEventAnalysisThree.name,
                        // boundEventImpossible.name,
                    ] as Name<BoundPosition>[],
                },
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    boundType: boundEventAnalysisThree.boundType,
                    jiNotationLevel: boundEventAnalysisThree.jiNotationLevel,
                    name: boundEventAnalysisThree.name,
                    cents: boundEventAnalysisThree.cents,
                    isPossibleBoundHistoryMember: true,
                    isBestPossibleBoundHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    nextBoundEvents: [] as Name<BoundPosition>[],
                },
                {
                    boundType: boundEventAnalysisFour.boundType,
                    jiNotationLevel: boundEventAnalysisFour.jiNotationLevel,
                    name: boundEventAnalysisFour.name,
                    cents: boundEventAnalysisFour.cents,
                    isPossibleBoundHistoryMember: false,
                    isBestPossibleBoundHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    nextBoundEvents: [] as Name<BoundPosition>[],
                },
            ],
        }
        expect(actual).toEqual(expected)
    })
})

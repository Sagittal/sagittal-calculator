import { HALF_SCALER, Multiplier, Name, Scamon } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import { BoundClass, BoundType, JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { EXTREME_EDA, ULTRA_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { consolidateBoundClassHistories } from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories"
import { BoundClassEventAnalysis, BoundClassHistoryAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {
    boundClassEventAnalysisFixture,
    boundClassHistoryAnalysisFixture,
} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("consolidateBoundClassHistories", (): void => {
    it("consolidates bound histories to collapse redundancies per JI notation level and show which bound class events can lead into which events in the next JI notation level, and which ones are members of histories that are possible, and what the best rank is in any event that becomes part of this consolidation, and what the best rank of any bound class history this bound class event is a member of is, and membership in the best possible bound class history", (): void => {
        const boundClassEventAnalysisAGoesToEventCAndD: BoundClassEventAnalysis = {
            ...boundClassEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: "'/| )/|" as Name<BoundClass>,
            pitch: { monzo: [], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
            rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            exact: false,
        }
        const boundClassEventAnalysisBGoesToEventC: BoundClassEventAnalysis = {
            ...boundClassEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.INA_MIDPOINT,
            name: "12.5°58" as Name<BoundClass>,
            pitch: { monzo: APOTOME.monzo, scaler: [12.5, ULTRA_EDA] } as Scamon<{ rational: false }>,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }
        const boundClassEventAnalysisC: BoundClassEventAnalysis = {
            ...boundClassEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ",)/| )/|" as Name<BoundClass>,
            pitch: { monzo: [], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
            rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            exact: false,
        }
        const boundClassEventAnalysisD: BoundClassEventAnalysis = {
            ...boundClassEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "50.5°233" as Name<BoundClass>,
            pitch: { monzo: APOTOME.monzo, scaler: [50.5, EXTREME_EDA] } as Scamon<{ rational: false }>,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }
        const boundClassEventAnalysisCButWithBetterRank: BoundClassEventAnalysis = {
            ...boundClassEventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ",)/| )/|" as Name<BoundClass>,
            pitch: { monzo: [], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            exact: false,
        }

        const bestPossibleBoundClassHistoryAnalysis: BoundClassHistoryAnalysis = {
            ...boundClassHistoryAnalysisFixture,
            boundClassEventAnalyses: [
                boundClassEventAnalysisBGoesToEventC,
                boundClassEventAnalysisCButWithBetterRank,
            ],
            rank: RANKS[ BoundType.COMMA_MEAN ],
            possible: true,
            tinaError: 0 as Multiplier<Tina>,
            pitch: { monzo: [], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
        }
        const boundClassHistoryAnalyses: BoundClassHistoryAnalysis[] = [
            {
                ...boundClassHistoryAnalysisFixture,
                boundClassEventAnalyses: [
                    boundClassEventAnalysisAGoesToEventCAndD,
                    boundClassEventAnalysisC,
                ],
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                possible: true,
                tinaError: 0 as Multiplier<Tina>,
                pitch: { monzo: [], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
            },
            bestPossibleBoundClassHistoryAnalysis,
            {
                ...boundClassHistoryAnalysisFixture,
                boundClassEventAnalyses: [
                    boundClassEventAnalysisAGoesToEventCAndD,
                    boundClassEventAnalysisD,
                ],
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                possible: false,
                tinaError: 3.05589400712 as Multiplier<Tina>,
                pitch: { monzo: [], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
            },
            {
                ...boundClassHistoryAnalysisFixture,
                boundClassEventAnalyses: [
                    boundClassEventAnalysisBGoesToEventC,
                ],
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                possible: false,
                tinaError: 2.26723955922 as Multiplier<Tina>,
                pitch: { monzo: [], scaler: HALF_SCALER } as Scamon<{ rational: false }>,
            },
        ]

        const actual = consolidateBoundClassHistories(boundClassHistoryAnalyses, bestPossibleBoundClassHistoryAnalysis)

        const expected = {
            [ JiNotationLevel.ULTRA ]: [
                {
                    boundType: boundClassEventAnalysisAGoesToEventCAndD.boundType,
                    jiNotationLevel: boundClassEventAnalysisAGoesToEventCAndD.jiNotationLevel,
                    name: boundClassEventAnalysisAGoesToEventCAndD.name,
                    pitch: boundClassEventAnalysisAGoesToEventCAndD.pitch,
                    isPossibleBoundClassHistoryMember: true,
                    isBestPossibleBoundClassHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    nextBoundClassEvents: [
                        boundClassEventAnalysisC.name,
                        boundClassEventAnalysisD.name,
                    ] as Array<Name<BoundClass>>,
                },
                {
                    boundType: boundClassEventAnalysisBGoesToEventC.boundType,
                    jiNotationLevel: boundClassEventAnalysisBGoesToEventC.jiNotationLevel,
                    name: boundClassEventAnalysisBGoesToEventC.name,
                    pitch: boundClassEventAnalysisBGoesToEventC.pitch,
                    isPossibleBoundClassHistoryMember: true,
                    isBestPossibleBoundClassHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    nextBoundClassEvents: [
                        boundClassEventAnalysisC.name,
                    ] as Array<Name<BoundClass>>,
                },
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    boundType: boundClassEventAnalysisC.boundType,
                    jiNotationLevel: boundClassEventAnalysisC.jiNotationLevel,
                    name: boundClassEventAnalysisC.name,
                    pitch: boundClassEventAnalysisC.pitch,
                    isPossibleBoundClassHistoryMember: true,
                    isBestPossibleBoundClassHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    nextBoundClassEvents: [] as Array<Name<BoundClass>>,
                },
                {
                    boundType: boundClassEventAnalysisD.boundType,
                    jiNotationLevel: boundClassEventAnalysisD.jiNotationLevel,
                    name: boundClassEventAnalysisD.name,
                    pitch: boundClassEventAnalysisD.pitch,
                    isPossibleBoundClassHistoryMember: false,
                    isBestPossibleBoundClassHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    nextBoundClassEvents: [] as Array<Name<BoundClass>>,
                },
            ],
        }
        expect(actual).toEqual(expected)
    })
})

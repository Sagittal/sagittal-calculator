import { Count, Decimal, Rank } from "../../../../../src/general"
import { BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { updateJiNotationLevelAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/boundClass/levels"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../src/scripts/jiNotationBoundClass/globals"
import { BoundHistoryAnalysis } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("updateJiNotationLevelAnalysis", (): void => {
    describe("jiNotationLevelsBestHistoryRanks", (): void => {
        it("initializes a rank at a JI notation level when it doesn't exist yet", (): void => {
            const bestPossibleBoundHistory: BoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        rank: RANKS[ BoundType.INA_MIDPOINT ],
                    },
                ],
            }
            if (JiNotationLevel.MEDIUM in jiNotationLevelsBestHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ]
            }
            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ]).toBeUndefined()

            updateJiNotationLevelAnalysis(bestPossibleBoundHistory)

            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ][ RANKS[ BoundType.INA_MIDPOINT ] ])
                .toBe(1 as Count<Decimal<{ integer: true }> & Rank<BoundType>>)
        })

        it("increments ranks at JI levels when they exist", (): void => {
            const bestPossibleBoundHistory: BoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        rank: RANKS[ BoundType.INA_MIDPOINT ],
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.HIGH,
                        rank: RANKS[ BoundType.COMMA_MEAN ],
                    },
                ],
            }
            let formerMediumIna = 3 as Count<Decimal<{ integer: true }> & Rank<BoundType>>
            let formerHighMean = 4 as Count<Decimal<{ integer: true }> & Rank<BoundType>>
            jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] = {
                [ RANKS[ BoundType.INA_MIDPOINT ] ]: formerMediumIna,
            }
            jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ] = {
                [ RANKS[ BoundType.COMMA_MEAN ] ]: formerHighMean,
            }

            updateJiNotationLevelAnalysis(bestPossibleBoundHistory)

            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ][ RANKS[ BoundType.INA_MIDPOINT ] ])
                .toBe(formerMediumIna + 1 as Count<Decimal<{ integer: true }> & Rank<BoundType>>)
            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ][ RANKS[ BoundType.COMMA_MEAN ] ])
                .toBe(formerHighMean + 1 as Count<Decimal<{ integer: true }> & Rank<BoundType>>)
        })
    })

    describe("jiNotationLevelsBestCumulativeHistoryRanks", (): void => {
        it("increments ranks at JI levels", (): void => {
            const bestPossibleBoundHistory: BoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        rank: RANKS[ BoundType.INA_MIDPOINT ],
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.HIGH,
                        rank: RANKS[ BoundType.COMMA_MEAN ],
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        rank: RANKS[ BoundType.INA_MIDPOINT ],
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
                    },
                ],
            }
            if (JiNotationLevel.MEDIUM in jiNotationLevelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.MEDIUM ]
            }
            if (JiNotationLevel.HIGH in jiNotationLevelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.HIGH ]
            }
            if (JiNotationLevel.ULTRA in jiNotationLevelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.ULTRA ]
            }
            if (JiNotationLevel.EXTREME in jiNotationLevelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.EXTREME ]
            }

            updateJiNotationLevelAnalysis(bestPossibleBoundHistory)

            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.MEDIUM ][ RANKS[ BoundType.INA_MIDPOINT ] ],
            )
                .toBe(1 as Count<Decimal<{ integer: true }> & Rank<BoundType>>)
            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.HIGH ][ RANKS[ BoundType.COMMA_MEAN ] ],
            )
                .toBe(1 as Count<Decimal<{ integer: true }> & Rank<BoundType>>)
            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.ULTRA ][ RANKS[ BoundType.COMMA_MEAN ] ],
            )
                .toBe(1 as Count<Decimal<{ integer: true }> & Rank<BoundType>>)
            expect(
                // tslint:disable-next-line max-line-length
                jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.EXTREME ][ RANKS[ BoundType.SIZE_CATEGORY_BOUND ] ],
            )
                .toBe(1 as Count<Decimal<{ integer: true }> & Rank<BoundType>>)
        })
    })
})

import {Count, Decimal, Rank} from "../../../../../src/general"
import {BoundType, JiNotationLevelId} from "../../../../../src/sagittal/notations/ji"
import {updateJiNotationLevelAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/boundClass/levels"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../src/scripts/jiNotationBoundClass/globals"
import {BoundHistoryAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/history"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"
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
                        jiNotationLevel: JiNotationLevelId.MEDIUM,
                        rank: RANKS[BoundType.INA_MIDPOINT],
                    },
                ],
            }
            if (JiNotationLevelId.MEDIUM in jiNotationLevelsBestHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestHistoryRanks[JiNotationLevelId.MEDIUM]
            }
            expect(jiNotationLevelsBestHistoryRanks[JiNotationLevelId.MEDIUM]).toBeUndefined()

            updateJiNotationLevelAnalysis(bestPossibleBoundHistory)

            expect(jiNotationLevelsBestHistoryRanks[JiNotationLevelId.MEDIUM][RANKS[BoundType.INA_MIDPOINT]])
                .toBe(1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
        })

        it("increments ranks at JI levels when they exist", (): void => {
            const bestPossibleBoundHistory: BoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.MEDIUM,
                        rank: RANKS[BoundType.INA_MIDPOINT],
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.HIGH,
                        rank: RANKS[BoundType.COMMA_MEAN],
                    },
                ],
            }
            let formerMediumIna = 3 as Count<Decimal<{integer: true}> & Rank<BoundType>>
            let formerHighMean = 4 as Count<Decimal<{integer: true}> & Rank<BoundType>>
            jiNotationLevelsBestHistoryRanks[JiNotationLevelId.MEDIUM] = {
                [RANKS[BoundType.INA_MIDPOINT]]: formerMediumIna,
            }
            jiNotationLevelsBestHistoryRanks[JiNotationLevelId.HIGH] = {
                [RANKS[BoundType.COMMA_MEAN]]: formerHighMean,
            }

            updateJiNotationLevelAnalysis(bestPossibleBoundHistory)

            expect(jiNotationLevelsBestHistoryRanks[JiNotationLevelId.MEDIUM][RANKS[BoundType.INA_MIDPOINT]])
                .toBe(formerMediumIna + 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
            expect(jiNotationLevelsBestHistoryRanks[JiNotationLevelId.HIGH][RANKS[BoundType.COMMA_MEAN]])
                .toBe(formerHighMean + 1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
        })
    })

    describe("jiNotationLevelsBestCumulativeHistoryRanks", (): void => {
        it("increments ranks at JI levels", (): void => {
            const bestPossibleBoundHistory: BoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.MEDIUM,
                        rank: RANKS[BoundType.INA_MIDPOINT],
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.HIGH,
                        rank: RANKS[BoundType.COMMA_MEAN],
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.ULTRA,
                        rank: RANKS[BoundType.INA_MIDPOINT],
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
                    },
                ],
            }
            if (JiNotationLevelId.MEDIUM in jiNotationLevelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.MEDIUM]
            }
            if (JiNotationLevelId.HIGH in jiNotationLevelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.HIGH]
            }
            if (JiNotationLevelId.ULTRA in jiNotationLevelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.ULTRA]
            }
            if (JiNotationLevelId.EXTREME in jiNotationLevelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.EXTREME]
            }

            updateJiNotationLevelAnalysis(bestPossibleBoundHistory)

            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.MEDIUM][RANKS[BoundType.INA_MIDPOINT]],
            )
                .toBe(1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.HIGH][RANKS[BoundType.COMMA_MEAN]],
            )
                .toBe(1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.ULTRA][RANKS[BoundType.COMMA_MEAN]],
            )
                .toBe(1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
            expect(
                // tslint:disable-next-line max-line-length
                jiNotationLevelsBestCumulativeHistoryRanks[JiNotationLevelId.EXTREME][RANKS[BoundType.SIZE_CATEGORY_BOUND]],
            )
                .toBe(1 as Count<Decimal<{integer: true}> & Rank<BoundType>>)
        })
    })
})

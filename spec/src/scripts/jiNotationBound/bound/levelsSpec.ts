import { Count, Integer, Rank } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { updateJiNotationLevelAnalysis } from "../../../../../src/scripts/jiNotationBound/bound/levels"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
} from "../../../../../src/scripts/jiNotationBound/globals"
import { EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { HistoryAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { eventAnalysisFixture, historyAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("updateJiNotationLevelAnalysis", (): void => {
    describe("jiNotationLevelsBestHistoryRanks", (): void => {
        it("initializes a rank at a JI notation level when it doesn't exist yet", (): void => {
            const bestPossibleHistory: HistoryAnalysis = {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        rank: RANKS[ EventType.INA_MIDPOINT ],
                    },
                ],
            }
            if (JiNotationLevel.MEDIUM in jiNotationLevelsBestHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ]
            }
            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ]).toBeUndefined()

            updateJiNotationLevelAnalysis(bestPossibleHistory)

            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ][ RANKS[ EventType.INA_MIDPOINT ] ])
                .toBe(1 as Count<Integer & Rank<EventType>>)
        })

        it("increments ranks at JI levels when they exist", (): void => {
            const bestPossibleHistory: HistoryAnalysis = {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        rank: RANKS[ EventType.INA_MIDPOINT ],
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.HIGH,
                        rank: RANKS[ EventType.COMMA_MEAN ],
                    },
                ],
            }
            let formerMediumIna = 3 as Count<Integer & Rank<EventType>>
            let formerHighMean = 4 as Count<Integer & Rank<EventType>>
            jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] = {
                [ RANKS[ EventType.INA_MIDPOINT ] ]: formerMediumIna,
            }
            jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ] = {
                [ RANKS[ EventType.COMMA_MEAN ] ]: formerHighMean,
            }

            updateJiNotationLevelAnalysis(bestPossibleHistory)

            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ][ RANKS[ EventType.INA_MIDPOINT ] ])
                .toBe(formerMediumIna + 1 as Count<Integer & Rank<EventType>>)
            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ][ RANKS[ EventType.COMMA_MEAN ] ])
                .toBe(formerHighMean + 1 as Count<Integer & Rank<EventType>>)
        })
    })

    describe("jiNotationLevelsBestCumulativeHistoryRanks", (): void => {
        it("increments ranks at JI levels", (): void => {
            const bestPossibleHistory: HistoryAnalysis = {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        rank: RANKS[ EventType.INA_MIDPOINT ],
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.HIGH,
                        rank: RANKS[ EventType.COMMA_MEAN ],
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        rank: RANKS[ EventType.INA_MIDPOINT ],
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
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

            updateJiNotationLevelAnalysis(bestPossibleHistory)

            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.MEDIUM ][ RANKS[ EventType.INA_MIDPOINT ] ],
            )
                .toBe(1 as Count<Integer & Rank<EventType>>)
            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.HIGH ][ RANKS[ EventType.COMMA_MEAN ] ],
            )
                .toBe(1 as Count<Integer & Rank<EventType>>)
            expect(
                jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.ULTRA ][ RANKS[ EventType.COMMA_MEAN ] ],
            )
                .toBe(1 as Count<Integer & Rank<EventType>>)
            expect(
                // tslint:disable-next-line max-line-length
                jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.EXTREME ][ RANKS[ EventType.SIZE_CATEGORY_BOUND ] ],
            )
                .toBe(1 as Count<Integer & Rank<EventType>>)
        })
    })
})

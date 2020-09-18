import { Count, Integer, Maybe, Rank } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import {
    jiNotationLevelsBestCumulativeHistoryRanks,
    jiNotationLevelsBestHistoryRanks,
    updateJiNotationLevelAnalysis,
} from "../../../../../src/scripts/jiNotationBound/bound/levels"
import { EventAnalysis, HistoryAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
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
                        rank: 0 as Integer & Rank<EventAnalysis>,
                    },
                ],
            }
            if (JiNotationLevel.MEDIUM in jiNotationLevelsBestHistoryRanks) {
                // @ts-ignore
                delete jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ]
            }
            expect(jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ]).toBeUndefined()

            updateJiNotationLevelAnalysis(bestPossibleHistory)

            expect((jiNotationLevelsBestHistoryRanks[
                JiNotationLevel.MEDIUM
                ] as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
            )[ 0 ])
                .toBe(1 as Count<Integer & Rank<EventAnalysis>>)
        })

        it("increments ranks at JI levels when they exist", (): void => {
            const bestPossibleHistory: HistoryAnalysis = {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.MEDIUM,
                        rank: 0 as Integer & Rank<EventAnalysis>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.HIGH,
                        rank: 1 as Integer & Rank<EventAnalysis>,
                    },
                ],
            }
            let formerMediumIna = 3 as Count<Integer & Rank<EventAnalysis>>
            let formerHighMean = 4 as Count<Integer & Rank<EventAnalysis>>
            jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] = [formerMediumIna]
            jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ] = [undefined, formerHighMean]

            updateJiNotationLevelAnalysis(bestPossibleHistory)

            expect((jiNotationLevelsBestHistoryRanks[
                    JiNotationLevel.MEDIUM
                    ] as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
            )[ 0 ])
                .toBe(formerMediumIna + 1 as Count<Integer & Rank<EventAnalysis>>)
            expect((jiNotationLevelsBestHistoryRanks[
                JiNotationLevel.HIGH
                ] as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
            )[ 1 ])
                .toBe(formerHighMean + 1 as Count<Integer & Rank<EventAnalysis>>)
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
                        rank: 0 as Integer & Rank<EventAnalysis>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.HIGH,
                        rank: 2 as Integer & Rank<EventAnalysis>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        rank: 1 as Integer & Rank<EventAnalysis>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        rank: 3 as Integer & Rank<EventAnalysis>,
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

            expect((jiNotationLevelsBestCumulativeHistoryRanks[
                JiNotationLevel.MEDIUM
                ] as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
            )[ 0 ]).toBe(1 as Count<Integer & Rank<EventAnalysis>>)
            expect((jiNotationLevelsBestCumulativeHistoryRanks[
                JiNotationLevel.HIGH
                ] as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
            )[ 2 ]).toBe(1 as Count<Integer & Rank<EventAnalysis>>)
            expect((jiNotationLevelsBestCumulativeHistoryRanks[
                JiNotationLevel.ULTRA
                ] as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
            )[ 2 ]).toBe(1 as Count<Integer & Rank<EventAnalysis>>)
            expect((jiNotationLevelsBestCumulativeHistoryRanks[
                JiNotationLevel.EXTREME
                ] as Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>>
            )[ 3 ]).toBe(1 as Count<Integer & Rank<EventAnalysis>>)
        })
    })
})

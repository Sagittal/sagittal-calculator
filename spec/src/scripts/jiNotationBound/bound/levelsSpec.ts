import { Integer, Rank } from "../../../../../src/general"
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

            expect((jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] as { [ index: number ]: number })[ 0 ])
                .toBe(1)
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
            let formerMediumIna = 3
            let formerHighMean = 4
            jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] = [formerMediumIna]
            jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ] = [undefined, formerHighMean]

            updateJiNotationLevelAnalysis(bestPossibleHistory)

            expect((jiNotationLevelsBestHistoryRanks[ JiNotationLevel.MEDIUM ] as { [ index: number ]: number })[ 0 ])
                .toBe(formerMediumIna + 1)
            expect((jiNotationLevelsBestHistoryRanks[ JiNotationLevel.HIGH ] as { [ index: number ]: number })[ 1 ])
                .toBe(formerHighMean + 1)
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

            // tslint:disable-next-line max-line-length
            expect((jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.MEDIUM ] as { [ index: number ]: number })[ 0 ]).toBe(1)
            // tslint:disable-next-line max-line-length
            expect((jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.HIGH ] as { [ index: number ]: number })[ 2 ]).toBe(1)
            // tslint:disable-next-line max-line-length
            expect((jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.ULTRA ] as { [ index: number ]: number })[ 2 ]).toBe(1)
            // tslint:disable-next-line max-line-length
            expect((jiNotationLevelsBestCumulativeHistoryRanks[ JiNotationLevel.EXTREME ] as { [ index: number ]: number })[ 3 ]).toBe(1)
        })
    })
})

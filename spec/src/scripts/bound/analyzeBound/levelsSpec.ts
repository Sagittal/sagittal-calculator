import { Integer, Rank } from "../../../../../src/general"
import { Level } from "../../../../../src/sagittal/notations/ji"
import {
    levelsBestCumulativeHistoryRanks,
    levelsBestHistoryRanks,
    updateLevelAnalysis,
} from "../../../../../src/scripts/bound/analyzeBound/levels"
import { AnalyzedEvent, AnalyzedHistory } from "../../../../../src/scripts/bound/analyzedHistory"
import { analyzedEventFixture, analyzedHistoryFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("updateLevelAnalysis", () => {
    describe("levelsBestHistoryRanks", () => {
        it("initializes a rank at a level when it doesn't exist yet", () => {
            const bestPossibleHistory = {
                ...analyzedHistoryFixture,
                events: [
                    { ...analyzedEventFixture, level: Level.MEDIUM, rank: 0 as Integer & Rank<AnalyzedEvent> },
                ],
            }
            if (Level.MEDIUM in levelsBestHistoryRanks) {
                // @ts-ignore
                delete levelsBestHistoryRanks[ Level.MEDIUM ]
            }
            expect(levelsBestHistoryRanks[ Level.MEDIUM ]).toBeUndefined()

            updateLevelAnalysis(bestPossibleHistory)

            expect((levelsBestHistoryRanks[ Level.MEDIUM ] as { [ index: number ]: number })[ 0 ]).toBe(1)
        })

        it("increments ranks at levels when they exist", () => {
            const bestPossibleHistory: AnalyzedHistory = {
                ...analyzedHistoryFixture,
                events: [
                    { ...analyzedEventFixture, level: Level.MEDIUM, rank: 0 as Integer & Rank<AnalyzedEvent> },
                    { ...analyzedEventFixture, level: Level.HIGH, rank: 1 as Integer & Rank<AnalyzedEvent> },
                ],
            }
            let formerMediumIna = 3
            let formerHighMean = 4
            levelsBestHistoryRanks[ Level.MEDIUM ] = [formerMediumIna]
            levelsBestHistoryRanks[ Level.HIGH ] = [undefined, formerHighMean]

            updateLevelAnalysis(bestPossibleHistory)

            expect((levelsBestHistoryRanks[ Level.MEDIUM ] as { [ index: number ]: number })[ 0 ])
                .toBe(formerMediumIna + 1)
            expect((levelsBestHistoryRanks[ Level.HIGH ] as { [ index: number ]: number })[ 1 ])
                .toBe(formerHighMean + 1)
        })
    })

    describe("levelsBestCumulativeHistoryRanks", () => {
        it("increments ranks at levels", () => {
            const bestPossibleHistory = {
                ...analyzedHistoryFixture,
                events: [
                    { ...analyzedEventFixture, level: Level.MEDIUM, rank: 0 as Integer & Rank<AnalyzedEvent> },
                    { ...analyzedEventFixture, level: Level.HIGH, rank: 2 as Integer & Rank<AnalyzedEvent> },
                    { ...analyzedEventFixture, level: Level.ULTRA, rank: 1 as Integer & Rank<AnalyzedEvent> },
                    { ...analyzedEventFixture, level: Level.EXTREME, rank: 3 as Integer & Rank<AnalyzedEvent> },
                ],
            }
            if (Level.MEDIUM in levelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete levelsBestCumulativeHistoryRanks[ Level.MEDIUM ]
            }
            if (Level.HIGH in levelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete levelsBestCumulativeHistoryRanks[ Level.HIGH ]
            }
            if (Level.ULTRA in levelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete levelsBestCumulativeHistoryRanks[ Level.ULTRA ]
            }
            if (Level.EXTREME in levelsBestCumulativeHistoryRanks) {
                // @ts-ignore
                delete levelsBestCumulativeHistoryRanks[ Level.EXTREME ]
            }

            updateLevelAnalysis(bestPossibleHistory)

            expect((levelsBestCumulativeHistoryRanks[ Level.MEDIUM ] as { [ index: number ]: number })[ 0 ]).toBe(1)
            expect((levelsBestCumulativeHistoryRanks[ Level.HIGH ] as { [ index: number ]: number })[ 2 ]).toBe(1)
            expect((levelsBestCumulativeHistoryRanks[ Level.ULTRA ] as { [ index: number ]: number })[ 2 ]).toBe(1)
            expect((levelsBestCumulativeHistoryRanks[ Level.EXTREME ] as { [ index: number ]: number })[ 3 ]).toBe(1)
        })
    })
})

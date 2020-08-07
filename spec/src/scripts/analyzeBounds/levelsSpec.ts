import { Level } from "../../../../src/notations/ji"
import {
    levelsBestCumulativeHistoryRanks,
    levelsBestHistoryRanks,
    updateLevelAnalysis,
} from "../../../../src/scripts/analyzeBounds/levels"
import { AnalyzedHistory, EventRank } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture, analyzedHistoryFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("updateLevelAnalysis", () => {
    describe("levelsBestHistoryRanks", () => {
        it("initializes a rank at a level when it doesn't exist yet", () => {
            const bestPossibleHistory = {
                ...analyzedHistoryFixture,
                events: [
                    { ...analyzedEventFixture, level: Level.MEDIUM, rank: 0 as EventRank },
                ],
            }
            if (Level.MEDIUM in levelsBestHistoryRanks) {
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
                    { ...analyzedEventFixture, level: Level.MEDIUM, rank: 0 as EventRank },
                    { ...analyzedEventFixture, level: Level.HIGH, rank: 1 as EventRank },
                ],
            }
            let formerMediumIna = 3
            let formerHighMean = 4
            levelsBestHistoryRanks[ Level.MEDIUM ] = [formerMediumIna]
            levelsBestHistoryRanks[ Level.HIGH ] = [undefined, formerHighMean]

            updateLevelAnalysis(bestPossibleHistory)

            expect((levelsBestHistoryRanks[ Level.MEDIUM ] as { [ index: number ]: number })[ 0 ]).toBe(formerMediumIna + 1)
            expect((levelsBestHistoryRanks[ Level.HIGH ] as { [ index: number ]: number })[ 1 ]).toBe(formerHighMean + 1)
        })
    })

    describe("levelsBestCumulativeHistoryRanks", () => {
        it("increments ranks at levels", () => {
            const bestPossibleHistory = {
                ...analyzedHistoryFixture,
                events: [
                    { ...analyzedEventFixture, level: Level.MEDIUM, rank: 0 as EventRank },
                    { ...analyzedEventFixture, level: Level.HIGH, rank: 2 as EventRank },
                    { ...analyzedEventFixture, level: Level.ULTRA, rank: 1 as EventRank },
                    { ...analyzedEventFixture, level: Level.EXTREME, rank: 3 as EventRank },
                ],
            }
            if (Level.MEDIUM in levelsBestCumulativeHistoryRanks) {
                delete levelsBestCumulativeHistoryRanks[ Level.MEDIUM ]
            }
            if (Level.HIGH in levelsBestCumulativeHistoryRanks) {
                delete levelsBestCumulativeHistoryRanks[ Level.HIGH ]
            }
            if (Level.ULTRA in levelsBestCumulativeHistoryRanks) {
                delete levelsBestCumulativeHistoryRanks[ Level.ULTRA ]
            }
            if (Level.EXTREME in levelsBestCumulativeHistoryRanks) {
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
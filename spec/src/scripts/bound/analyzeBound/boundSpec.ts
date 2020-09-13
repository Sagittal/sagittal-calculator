import { Cents, Count, Id, Integer, Multiplier, Name, Pitch, Rank, Sum } from "../../../../../src/general"
import { Bound, Ina, Level, Tina } from "../../../../../src/sagittal/notations/ji"
import { analyzeBound } from "../../../../../src/scripts/bound/analyzeBound"
import * as levels from "../../../../../src/scripts/bound/analyzeBound/levels"
import * as ranks from "../../../../../src/scripts/bound/analyzeBound/ranks"
import { EventAnalysis, HistoryAnalysis, Score } from "../../../../../src/scripts/bound/analyzeHistory"
import { EventType, History } from "../../../../../src/scripts/bound/histories"

describe("analyzeBound", (): void => {
    const notBestHistory: History = [
        {
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            level: Level.INSANE,
            type: EventType.INA,
            name: "164.5°809" as Name<Pitch>,
            cents: 23.116419649559468 as Cents,
            // this one gets rank 4
        },
    ]
    const bestHistory: History = [
        {
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            level: Level.EXTREME,
            type: EventType.INA,
            name: "47.5°233" as Name<Pitch>,
            cents: 23.15 as Cents,
        },
        {
            level: Level.INSANE,
            type: EventType.INA,
            name: "164.5°809" as Name<Pitch>,
            cents: 23.116419649559468 as Cents,
            // this one gets rank 1
        },
    ]
    const histories: History[] = [
        notBestHistory,
        bestHistory,
    ]
    const bound: Bound = {
        cents: 23.1164196495597 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
        id: 47 as Id<Bound>,
    }
    const expectedBestHistoryEvents: EventAnalysis[] = [
        {
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
            rank: 1 as Integer & Rank<EventAnalysis>,
            distance: 0 as Cents,
            inaDistance: 0 as Multiplier<Ina>,
            exact: false,
        },
        {
            level: Level.EXTREME,
            type: EventType.INA,
            name: "47.5°233" as Name<Pitch>,
            cents: 23.15 as Cents,
            rank: 0 as Integer & Rank<EventAnalysis>,
            distance: 0.05000000000000071 as Cents,
            inaDistance: 0.10247613475154385 as Multiplier<Ina>,
            exact: false,
        },
        {
            level: Level.INSANE,
            type: EventType.INA,
            name: "164.5°809" as Name<Pitch>,
            cents: 23.116419649559468 as Cents,
            rank: 0 as Integer & Rank<EventAnalysis>,
            distance: 0.03358035044053054 as Cents,
            inaDistance: 0.238962941978454 as Multiplier<Ina>,
            exact: true,
        },
    ]
    const expectedBestPossibleHistory: HistoryAnalysis = {
        events: expectedBestHistoryEvents,
        cents: 23.116419649559468 as Cents as Cents,
        rank: 1 as Integer & Rank<EventAnalysis>,
        score: 131 as Score,
        possible: true,
        exact: false,
        totalDistance: 0.08358035044053125 as Cents,
        totalInaDistance: 0.34143907672999785 as Sum<Multiplier<Ina>>,
        tinaError: 0 as Multiplier<Tina>,
        initialPositionTinaDistance: -0.5613173198970488 as Multiplier<Tina>,
    }

    it("returns an analysis of the bound using its histories, including a consolidation of said histories, and its best possible history, and the difference between the bound and its initial position", (): void => {
        const actual = analyzeBound(histories, bound)

        const expected = {
            bestRank: 1 as Integer & Rank<EventAnalysis>,
            initialPosition: 23.195298960947348 as Cents,
            initialPositionTinaDistance: -0.5613173198954056 as Multiplier<Tina>,
            possibleHistoryCount: 2 as Count<HistoryAnalysis>,
            bestPossibleHistory: expectedBestPossibleHistory,
            bestPossibleHistoryTotalDistance: 0.08358035044053125 as Cents,
            bestPossibleHistoryTotalInaDistance: 0.34143907672999785 as Sum<Multiplier<Ina>>,
            historyConsolidation: {
                [ Level.ULTRA ]: [
                    {
                        level: Level.ULTRA,
                        type: EventType.MEAN,
                        name: ".)/| '/|" as Name<Pitch>,
                        cents: 23.2 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                        rankOfBestRankedMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                        nextEvents: [
                            ".)/| '/|",
                            "47.5°233",
                        ] as Name<Pitch>[],
                    },
                ],
                [ Level.EXTREME ]: [
                    {
                        level: Level.EXTREME,
                        type: EventType.MEAN,
                        name: ".)/| '/|" as Name<Pitch>,
                        cents: 23.2 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                        rankOfBestRankedMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                        nextEvents: [
                            "164.5°809",
                        ] as Name<Pitch>[],
                    },
                    {
                        level: Level.EXTREME,
                        type: EventType.INA,
                        name: "47.5°233" as Name<Pitch>,
                        cents: 23.15 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 0 as Integer & Rank<EventAnalysis>,
                        rankOfBestRankedMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                        nextEvents: [
                            "164.5°809",
                        ] as Name<Pitch>[],
                    },
                ],
                [ Level.INSANE ]: [
                    {
                        level: Level.INSANE,
                        type: EventType.INA,
                        name: "164.5°809" as Name<Pitch>,
                        cents: 23.116419649559468 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: 0 as Integer & Rank<EventAnalysis>,
                        rankOfBestRankedMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                        nextEvents: [] as Name<Pitch>[],
                    },
                ],
            },
        }
        expect(actual).toEqual(expected)
    })

    it("updates the rank analysis", (): void => {
        spyOn(ranks, "updateRankAnalysis")

        analyzeBound(histories, bound)

        const expectedBestHistoryRank = 1 as Integer & Rank<EventAnalysis>
        expect(ranks.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, bound.id)
    })

    it("updates the level analysis", (): void => {
        spyOn(levels, "updateLevelAnalysis")

        analyzeBound(histories, bound)

        expect(levels.updateLevelAnalysis).toHaveBeenCalledWith(expectedBestPossibleHistory)
    })
})

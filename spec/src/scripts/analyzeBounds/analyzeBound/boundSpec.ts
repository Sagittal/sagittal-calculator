import { Cents, Id, Integer, Name, Pitch, Proportion, Rank, Sum } from "../../../../../src/general"
import { Bound, Level, Tina } from "../../../../../src/sagittal/notations/ji"
import { analyzeBound, AnalyzedBound } from "../../../../../src/scripts/analyzeBounds/analyzeBound"
import * as levels from "../../../../../src/scripts/analyzeBounds/analyzeBound/levels"
import * as ranks from "../../../../../src/scripts/analyzeBounds/analyzeBound/ranks"
import { AnalyzedEvent, AnalyzedHistory, Score } from "../../../../../src/scripts/analyzeBounds/analyzedHistory"
import { ConsolidatedHistories } from "../../../../../src/scripts/analyzeBounds/consolidatedHistories"
import { EventType, History } from "../../../../../src/scripts/analyzeBounds/histories"

describe("analyzeBound", () => {
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
    const expectedBestHistoryEvents: AnalyzedEvent[] = [
        {
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
            rank: 1 as Rank<AnalyzedEvent, Integer>,
            distance: 0 as Cents,
            inaDistance: 0 as Proportion,
            exact: false,
        },
        {
            level: Level.EXTREME,
            type: EventType.INA,
            name: "47.5°233" as Name<Pitch>,
            cents: 23.15 as Cents,
            rank: 0 as Rank<AnalyzedEvent, Integer>,
            distance: 0.05000000000000071 as Cents,
            inaDistance: 0.10247613475154385 as Proportion,
            exact: false,
        },
        {
            level: Level.INSANE,
            type: EventType.INA,
            name: "164.5°809" as Name<Pitch>,
            cents: 23.116419649559468 as Cents,
            rank: 0 as Rank<AnalyzedEvent, Integer>,
            distance: 0.03358035044053054 as Cents,
            inaDistance: 0.238962941978454 as Proportion,
            exact: true,
        },
    ]
    const expectedBestPossibleHistory: AnalyzedHistory = {
        events: expectedBestHistoryEvents,
        cents: 23.116419649559468 as Cents as Cents,
        rank: 1 as Rank<AnalyzedEvent, Integer>,
        score: 131 as Score,
        possible: true,
        exact: false,
        distance: 0.08358035044053125 as Cents,
        inaDistance: 0.34143907672999785 as Sum<Proportion>,
        tinaError: 0 as Proportion<Tina>,
        initialPositionTinaDifference: -0.5613173198970488 as Proportion<Tina>,
    }

    it("returns an analysis of the bound using its histories, including a consolidated formatation of said histories, and its best possible history, and the difference between the bound and its initial position", () => {
        const actual = analyzeBound(histories, bound)

        const expected = {
            bestRank: 1 as Rank<AnalyzedEvent, Integer>,
            initialPosition: 23.195298960947348 as Cents,
            initialPositionTinaDifference: -0.5613173198954056 as number,
            possibleHistoryCount: 2 as number,
            bestPossibleHistory: expectedBestPossibleHistory,
            bestPossibleHistoryDistance: 0.08358035044053125 as Cents,
            bestPossibleHistoryInaDistance: 0.34143907672999785 as number,
            consolidatedHistories: {
                [ Level.ULTRA ]: [
                    {
                        level: Level.ULTRA,
                        type: EventType.MEAN,
                        name: ".)/| '/|" as Name<Pitch>,
                        cents: 23.2 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
                        rankOfBestRankedMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
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
                        rankOfBestRankedEventInAnyMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
                        rankOfBestRankedMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
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
                        rankOfBestRankedEventInAnyMemberHistory: 0 as Rank<AnalyzedEvent, Integer>,
                        rankOfBestRankedMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
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
                        rankOfBestRankedEventInAnyMemberHistory: 0 as Rank<AnalyzedEvent, Integer>,
                        rankOfBestRankedMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
                        nextEvents: [] as Name<Pitch>[],
                    },
                ],
            } as ConsolidatedHistories,
        } as AnalyzedBound
        expect(actual).toEqual(expected)
    })

    it("updates the rank analysis", () => {
        spyOn(ranks, "updateRankAnalysis")

        analyzeBound(histories, bound)

        const expectedBestHistoryRank = 1 as Rank<AnalyzedEvent, Integer>
        expect(ranks.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, bound.id)
    })

    it("updates the level analysis", () => {
        spyOn(levels, "updateLevelAnalysis")

        analyzeBound(histories, bound)

        expect(levels.updateLevelAnalysis).toHaveBeenCalledWith(expectedBestPossibleHistory)
    })
})

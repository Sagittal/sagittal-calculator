import { analyzeBound } from "../../../../src/scripts/analyzeBounds/bound"
import * as rankAnalysis from "../../../../src/scripts/analyzeBounds/ranks"
import * as levelAnalysis from "../../../../src/scripts/analyzeBounds/levels"
import { Bound, BoundId, Level } from "../../../../src/notations/ji/types"
import {
    AnalyzedBound,
    AnalyzedEvent,
    AnalyzedHistory,
    ConsolidatedHistories,
    EventName,
    EventRank,
    EventType,
    History,
    Score,
} from "../../../../src/scripts/analyzeBounds/types"
import { Cents, Proportion, Sum } from "../../../../src/utilities/types"

describe("analyzeBound", () => {
    const notBestHistory: History = [
        {
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as EventName,
            position: 23.2 as Cents,
        },
        {
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ".)/| '/|" as EventName,
            position: 23.2 as Cents,
        },
        {
            level: Level.INSANE,
            type: EventType.INA,
            name: "164.5°809" as EventName,
            position: 23.116419649559468 as Cents,
            // this one gets rank 4
        },
    ]
    const bestHistory: History = [
        {
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as EventName,
            position: 23.2 as Cents,
        },
        {
            level: Level.EXTREME,
            type: EventType.INA,
            name: "47.5°233" as EventName,
            position: 23.15 as Cents,
        },
        {
            level: Level.INSANE,
            type: EventType.INA,
            name: "164.5°809" as EventName,
            position: 23.116419649559468 as Cents,
            // this one gets rank 1
        },
    ]
    const histories: History[] = [
        notBestHistory,
        bestHistory,
    ]
    const bound: Bound = {
        position: 23.1164196495597 as Cents,
        levels: [Level.ULTRA, Level.EXTREME, Level.INSANE],
        id: 47 as BoundId,
    }
    const expectedBestHistoryEvents: AnalyzedEvent[] = [
        {
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as EventName,
            position: 23.2 as Cents,
            rank: 1 as EventRank,
            distance: 0 as Cents,
            inaDistance: 0 as Proportion,
            exact: false,
        },
        {
            level: Level.EXTREME,
            type: EventType.INA,
            name: "47.5°233" as EventName,
            position: 23.15 as Cents,
            rank: 0 as EventRank,
            distance: 0.05000000000000071 as Cents,
            inaDistance: 0.10247613475154385 as Proportion,
            exact: false,
        },
        {
            level: Level.INSANE,
            type: EventType.INA,
            name: "164.5°809" as EventName,
            position: 23.116419649559468 as Cents,
            rank: 0 as EventRank,
            distance: 0.03358035044053054 as Cents,
            inaDistance: 0.238962941978454 as Proportion,
            exact: true,
        },
    ]
    const expectedBestPossibleHistory: AnalyzedHistory = {
        events: expectedBestHistoryEvents,
        position: 23.116419649559468 as Cents as Cents,
        rank: 1 as EventRank,
        score: 131 as Score,
        possible: true,
        exact: false,
        distance: 0.08358035044053125 as Cents,
        inaDistance: 0.34143907672999785 as Sum<Proportion>,
        tinaError: 0 as Proportion<"Tina">,
        initialPositionTinaDifference: -0.5613173198970488 as Proportion<"Tina">,
    }

    it("returns an analysis of the bound using its histories, including a consolidated presentation of said histories, and its best possible history, and the difference between the bound and its initial position", () => {
        const result = analyzeBound(histories, bound)

        expect(result).toEqual({
            bestRank: 1 as EventRank,
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
                        name: ".)/| '/|" as EventName,
                        position: 23.2 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 1 as EventRank,
                        rankOfBestRankedMemberHistory: 1 as EventRank,
                        nextEvents: [
                            ".)/| '/|",
                            "47.5°233",
                        ] as EventName[],
                    },
                ],
                [ Level.EXTREME ]: [
                    {
                        level: Level.EXTREME,
                        type: EventType.MEAN,
                        name: ".)/| '/|" as EventName,
                        position: 23.2 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 1 as EventRank,
                        rankOfBestRankedMemberHistory: 1 as EventRank,
                        nextEvents: [
                            "164.5°809",
                        ] as EventName[],
                    },
                    {
                        level: Level.EXTREME,
                        type: EventType.INA,
                        name: "47.5°233" as EventName,
                        position: 23.15 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 0 as EventRank,
                        rankOfBestRankedMemberHistory: 1 as EventRank,
                        nextEvents: [
                            "164.5°809",
                        ] as EventName[],
                    },
                ],
                [ Level.INSANE ]: [
                    {
                        level: Level.INSANE,
                        type: EventType.INA,
                        name: "164.5°809" as EventName,
                        position: 23.116419649559468 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: 0 as EventRank,
                        rankOfBestRankedMemberHistory: 1 as EventRank,
                        nextEvents: [] as EventName[],
                    },
                ],
            } as ConsolidatedHistories,
        } as AnalyzedBound)
    })

    it("updates the rank analysis", () => {
        spyOn(rankAnalysis, "updateRankAnalysis")

        analyzeBound(histories, bound)

        const expectedBestHistoryRank = 1 as EventRank
        expect(rankAnalysis.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, bound.id)
    })

    it("updates the level analysis", () => {
        spyOn(levelAnalysis, "updateLevelAnalysis")

        analyzeBound(histories, bound)

        expect(levelAnalysis.updateLevelAnalysis).toHaveBeenCalledWith(expectedBestPossibleHistory)
    })
})

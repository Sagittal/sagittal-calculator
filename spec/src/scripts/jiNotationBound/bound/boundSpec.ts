import { Cents, Count, Id, Integer, Multiplier, Name, Pitch, Rank, Sum } from "../../../../../src/general"
import { Ina, JiNotationBound, JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { analyzeJiNotationBound } from "../../../../../src/scripts/jiNotationBound/bound"
import * as jiNotationLevels from "../../../../../src/scripts/jiNotationBound/bound/levels"
import * as ranks from "../../../../../src/scripts/jiNotationBound/bound/ranks"
import { EventType, History } from "../../../../../src/scripts/jiNotationBound/histories"
import { EventAnalysis, HistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBound/history"

describe("analyzeJiNotationBound", (): void => {
    const notBestHistory: History = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            type: EventType.INA,
            name: "164.5°809" as Name<Pitch>,
            cents: 23.116419649559468 as Cents,
            // this one gets rank 4
        },
    ]
    const bestHistory: History = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.INA,
            name: "47.5°233" as Name<Pitch>,
            cents: 23.15 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
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
    const jiNotationBound: JiNotationBound = {
        cents: 23.1164196495597 as Cents,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        id: 47 as Id<JiNotationBound>,
    }
    const expectedBestHistoryEventAnalyses: EventAnalysis[] = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            type: EventType.MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
            rank: 1 as Integer & Rank<EventAnalysis>,
            distance: 0 as Cents,
            inaDistance: 0 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.INA,
            name: "47.5°233" as Name<Pitch>,
            cents: 23.15 as Cents,
            rank: 0 as Integer & Rank<EventAnalysis>,
            distance: 0.05000000000000071 as Cents,
            inaDistance: 0.10247613475154385 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
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
        eventAnalyses: expectedBestHistoryEventAnalyses,
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

    it("returns an analysis of the JI notation bound using its histories, including a consolidation of said histories, and its best possible history, and the difference between the bound and its initial position", (): void => {
        const actual = analyzeJiNotationBound(histories, jiNotationBound)

        const expected = {
            bestRank: 1 as Integer & Rank<EventAnalysis>,
            initialPosition: 23.195298960947348 as Cents,
            initialPositionTinaDistance: -0.5613173198954056 as Multiplier<Tina>,
            possibleHistoryCount: 2 as Count<HistoryAnalysis>,
            bestPossibleHistory: expectedBestPossibleHistory,
            bestPossibleHistoryTotalDistance: 0.08358035044053125 as Cents,
            bestPossibleHistoryTotalInaDistance: 0.34143907672999785 as Sum<Multiplier<Ina>>,
            historyConsolidation: {
                [ JiNotationLevel.ULTRA ]: [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
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
                [ JiNotationLevel.EXTREME ]: [
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
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
                        jiNotationLevel: JiNotationLevel.EXTREME,
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
                [ JiNotationLevel.INSANE ]: [
                    {
                        jiNotationLevel: JiNotationLevel.INSANE,
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

        analyzeJiNotationBound(histories, jiNotationBound)

        const expectedBestHistoryRank = 1 as Integer & Rank<EventAnalysis>
        expect(ranks.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, jiNotationBound.id)
    })

    it("updates the JI notation level analysis", (): void => {
        spyOn(jiNotationLevels, "updateJiNotationLevelAnalysis")

        analyzeJiNotationBound(histories, jiNotationBound)

        expect(jiNotationLevels.updateJiNotationLevelAnalysis).toHaveBeenCalledWith(expectedBestPossibleHistory)
    })
})

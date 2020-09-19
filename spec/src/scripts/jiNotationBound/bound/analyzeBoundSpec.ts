import { Abs, Cents, Count, Id, Multiplier, Name, Pitch, Sum } from "../../../../../src/general"
import { Ina, JiNotationBound, JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { analyzeJiNotationBound } from "../../../../../src/scripts/jiNotationBound/bound"
import * as jiNotationLevels from "../../../../../src/scripts/jiNotationBound/bound/levels"
import * as ranks from "../../../../../src/scripts/jiNotationBound/bound/ranks"
import { EventType, History } from "../../../../../src/scripts/jiNotationBound/histories"
import { EventAnalysis, HistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"

describe("analyzeJiNotationBound", (): void => {
    const notBestHistory: History = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            type: EventType.COMMA_MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.COMMA_MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            type: EventType.INA_MIDPOINT,
            name: "164.5°809" as Name<Pitch>,
            cents: 23.116419649559468 as Cents,
            // this one gets rank 4
        },
    ]
    const bestHistory: History = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            type: EventType.COMMA_MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.INA_MIDPOINT,
            name: "47.5°233" as Name<Pitch>,
            cents: 23.15 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            type: EventType.INA_MIDPOINT,
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
            type: EventType.COMMA_MEAN,
            name: ".)/| '/|" as Name<Pitch>,
            cents: 23.2 as Cents,
            rank: RANKS[ EventType.COMMA_MEAN ],
            distance: 0 as Abs<Cents>,
            inaDistance: 0 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.INA_MIDPOINT,
            name: "47.5°233" as Name<Pitch>,
            cents: 23.15 as Cents,
            rank: RANKS[ EventType.INA_MIDPOINT ],
            distance: 0.05000000000000071 as Abs<Cents>,
            inaDistance: 0.10247613475154385 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            type: EventType.INA_MIDPOINT,
            name: "164.5°809" as Name<Pitch>,
            cents: 23.116419649559468 as Cents,
            rank: RANKS[ EventType.INA_MIDPOINT ],
            distance: 0.03358035044053054 as Abs<Cents>,
            inaDistance: 0.238962941978454 as Multiplier<Ina>,
            exact: true,
        },
    ]
    const expectedBestPossibleHistory: HistoryAnalysis = {
        eventAnalyses: expectedBestHistoryEventAnalyses,
        cents: 23.116419649559468 as Cents as Cents,
        rank: RANKS[ EventType.COMMA_MEAN ],
        score: 131 as Score,
        possible: true,
        exact: false,
        totalDistance: 0.08358035044053125 as Sum<Abs<Cents>>,
        totalInaDistance: 0.34143907672999785 as Sum<Multiplier<Ina>>,
        tinaError: 0 as Multiplier<Tina>,
        initialPositionTinaDistance: -0.5613173198957342 as Multiplier<Tina>,
    }

    it("returns an analysis of the JI notation bound using its histories, including a consolidation of said histories, and its best possible history, and the difference between the bound and its initial position", (): void => {
        const actual = analyzeJiNotationBound(histories, jiNotationBound)

        const expected = {
            bestRank: RANKS[ EventType.COMMA_MEAN ],
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
                        type: EventType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<Pitch>,
                        cents: 23.2 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                        rankOfBestRankedMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                        nextEvents: [
                            ".)/| '/|",
                            "47.5°233",
                        ] as Name<Pitch>[],
                    },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        type: EventType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<Pitch>,
                        cents: 23.2 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                        rankOfBestRankedMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                        nextEvents: [
                            "164.5°809",
                        ] as Name<Pitch>[],
                    },
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        type: EventType.INA_MIDPOINT,
                        name: "47.5°233" as Name<Pitch>,
                        cents: 23.15 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ EventType.INA_MIDPOINT ],
                        rankOfBestRankedMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                        nextEvents: [
                            "164.5°809",
                        ] as Name<Pitch>[],
                    },
                ],
                [ JiNotationLevel.INSANE ]: [
                    {
                        jiNotationLevel: JiNotationLevel.INSANE,
                        type: EventType.INA_MIDPOINT,
                        name: "164.5°809" as Name<Pitch>,
                        cents: 23.116419649559468 as Cents,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ EventType.INA_MIDPOINT ],
                        rankOfBestRankedMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                        nextEvents: [] as Name<Pitch>[],
                    },
                ],
            },
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("updates the rank analysis", (): void => {
        spyOn(ranks, "updateRankAnalysis")

        analyzeJiNotationBound(histories, jiNotationBound)

        const expectedBestHistoryRank = RANKS[ EventType.COMMA_MEAN ]
        expect(ranks.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, jiNotationBound.id)
    })

    it("updates the JI notation level analysis", (): void => {
        spyOn(jiNotationLevels, "updateJiNotationLevelAnalysis")

        analyzeJiNotationBound(histories, jiNotationBound)

        expect(jiNotationLevels.updateJiNotationLevelAnalysis).toHaveBeenCalledWith(expectedBestPossibleHistory)
    })
})

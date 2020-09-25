import { Abs, Cents, Count, Decimal, Id, Multiplier, Name, Sum } from "../../../../../src/general"
import { BoundType, Ina, JiNotationBound, JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { analyzeJiNotationBound } from "../../../../../src/scripts/jiNotationBound/bound"
import * as jiNotationLevels from "../../../../../src/scripts/jiNotationBound/bound/levels"
import * as ranks from "../../../../../src/scripts/jiNotationBound/bound/ranks"
import { BoundHistory, BoundPosition } from "../../../../../src/scripts/jiNotationBound/histories"
import { BoundEventAnalysis, BoundHistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"

describe("analyzeJiNotationBound", (): void => {
    const notBestHistory: BoundHistory = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<BoundPosition>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<BoundPosition>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<BoundPosition>,
            cents: 23.116419649559468 as Cents,
            // this one gets rank 4
        },
    ]
    const bestHistory: BoundHistory = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<BoundPosition>,
            cents: 23.2 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<BoundPosition>,
            cents: 23.15 as Cents,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<BoundPosition>,
            cents: 23.116419649559468 as Cents,
            // this one gets rank 1
        },
    ]
    const histories: BoundHistory[] = [
        notBestHistory,
        bestHistory,
    ]
    const jiNotationBound: JiNotationBound = {
        decimal: 1.01344211122 as Decimal, // 23.1164196495597¢
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        id: 47 as Id<JiNotationBound>,
        boundType: BoundType.INA_MIDPOINT,
    }
    const expectedBestBoundHistoryBoundEventAnalyses: BoundEventAnalysis[] = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<BoundPosition>,
            cents: 23.2 as Cents,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            distance: 0 as Abs<Cents>,
            inaDistance: 0 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<BoundPosition>,
            cents: 23.15 as Cents,
            rank: RANKS[ BoundType.INA_MIDPOINT ],
            distance: 0.05000000000000071 as Abs<Cents>,
            inaDistance: 0.10247613475154385 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<BoundPosition>,
            cents: 23.116419649559468 as Cents,
            rank: RANKS[ BoundType.INA_MIDPOINT ],
            distance: 0.03358035044053054 as Abs<Cents>,
            inaDistance: 0.23896294197845397 as Multiplier<Ina>,
            exact: true,
        },
    ]
    const expectedBestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis = {
        boundEventAnalyses: expectedBestBoundHistoryBoundEventAnalyses,
        cents: 23.116419649559468 as Cents as Cents,
        rank: RANKS[ BoundType.COMMA_MEAN ],
        score: 131 as Score,
        possible: true,
        exact: false,
        totalDistance: 0.08358035044053125 as Sum<Abs<Cents>>,
        totalInaDistance: 0.34143907672999785 as Sum<Multiplier<Ina>>,
        tinaError: 0 as Multiplier<Tina>,
        initialPositionTinaDistance: -0.5613173198957342 as Multiplier<Tina>,
    }

    it("returns an analysis of the JI notation bound using its histories, including a consolidation of said bound histories, and its best possible bound history, and the difference between the bound and its initial position", (): void => {
        const actual = analyzeJiNotationBound(histories, jiNotationBound)

        const expected = {
            bestRank: RANKS[ BoundType.COMMA_MEAN ],
            initialPosition: 23.195298960947348 as Cents,
            initialPositionTinaDistance: -0.5613173198954056 as Multiplier<Tina>,
            possibleBoundHistoryCount: 2 as Count<BoundHistoryAnalysis>,
            bestPossibleBoundHistoryAnalysis: expectedBestPossibleBoundHistoryAnalysis,
            bestPossibleBoundHistoryTotalDistance: 0.08358035044053125 as Cents,
            bestPossibleBoundHistoryTotalInaDistance: 0.34143907672999785 as Sum<Multiplier<Ina>>,
            boundHistoryConsolidation: {
                [ JiNotationLevel.ULTRA ]: [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<BoundPosition>,
                        cents: 23.2 as Cents,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundEvents: [
                            ".)/| '/|",
                            "47.5°233",
                        ] as Name<BoundPosition>[],
                    },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<BoundPosition>,
                        cents: 23.2 as Cents,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundEvents: [
                            "164.5°809",
                        ] as Name<BoundPosition>[],
                    },
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "47.5°233" as Name<BoundPosition>,
                        cents: 23.15 as Cents,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.INA_MIDPOINT ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundEvents: [
                            "164.5°809",
                        ] as Name<BoundPosition>[],
                    },
                ],
                [ JiNotationLevel.INSANE ]: [
                    {
                        jiNotationLevel: JiNotationLevel.INSANE,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "164.5°809" as Name<BoundPosition>,
                        cents: 23.116419649559468 as Cents,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.INA_MIDPOINT ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundEvents: [] as Name<BoundPosition>[],
                    },
                ],
            },
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("updates the rank analysis", (): void => {
        spyOn(ranks, "updateRankAnalysis")

        analyzeJiNotationBound(histories, jiNotationBound)

        const expectedBestHistoryRank = RANKS[ BoundType.COMMA_MEAN ]
        expect(ranks.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, jiNotationBound.id)
    })

    it("updates the JI notation level analysis", (): void => {
        spyOn(jiNotationLevels, "updateJiNotationLevelAnalysis")

        analyzeJiNotationBound(histories, jiNotationBound)

        expect(jiNotationLevels.updateJiNotationLevelAnalysis)
            .toHaveBeenCalledWith(expectedBestPossibleBoundHistoryAnalysis)
    })
})

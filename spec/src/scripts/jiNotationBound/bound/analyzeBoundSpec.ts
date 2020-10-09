import {
    Abs,
    Cents,
    computePitchFromCents,
    Count,
    Id,
    Monzo,
    Multiplier,
    Name,
    Pitch,
    SQRT_SCALER,
    Sum,
} from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import {
    Bound,
    BoundType,
    Ina,
    JiNotationBound,
    JiNotationLevel,
    Tina,
} from "../../../../../src/sagittal/notations/ji"
import { analyzeJiNotationBound } from "../../../../../src/scripts/jiNotationBound/bound"
import * as jiNotationLevels from "../../../../../src/scripts/jiNotationBound/bound/levels"
import * as ranks from "../../../../../src/scripts/jiNotationBound/bound/ranks"
import { BoundHistory } from "../../../../../src/scripts/jiNotationBound/histories"
import { BoundEventAnalysis, BoundHistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("analyzeJiNotationBound", (): void => {
    const notBestHistory: BoundHistory = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<Bound>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Pitch<{ rational: false }>,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<Bound>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Pitch<{ rational: false }>,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<Bound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, 809],
            } as Pitch<{ rational: false }>,
            // This one gets rank 4
        },
    ]
    const bestHistory: BoundHistory = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<Bound>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Pitch<{ rational: false }>,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<Bound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [47.5, 233],
            } as Pitch<{ rational: false }>,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<Bound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, 809],
            } as Pitch<{ rational: false }>,
            // This one gets rank 1
        },
    ]
    const histories: BoundHistory[] = [
        notBestHistory,
        bestHistory,
    ]
    const jiNotationBound: JiNotationBound = {
        ...jiNotationBoundFixture,
        pitch: computePitchFromCents(23.116420 as Cents),
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        id: 47 as Id<JiNotationBound>,
        boundType: BoundType.INA_MIDPOINT,
    }
    const expectedBestBoundHistoryBoundEventAnalyses: BoundEventAnalysis[] = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<Bound>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Pitch<{ rational: false }>,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            distance: 0 as Abs<Cents>,
            inaDistance: 0 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<Bound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [47.5, 233],
            } as Pitch<{ rational: false }>,
            rank: RANKS[ BoundType.INA_MIDPOINT ],
            distance: 0.019171116563747148 as Abs<Cents>,
            inaDistance: 0.03929163848648158 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<Bound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, 809],
            } as Pitch<{ rational: false }>,
            rank: RANKS[ BoundType.INA_MIDPOINT ],
            distance: 0.05970819482401879 as Abs<Cents>,
            inaDistance: 0.4248927038637779 as Multiplier<Ina>,
            exact: true,
        },
    ]
    const expectedBestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis = {
        boundEventAnalyses: expectedBestBoundHistoryBoundEventAnalyses,
        pitch: {
            monzo: APOTOME.monzo,
            scaler: [164.5, 809],
        } as Pitch<{ rational: false }>,
        rank: RANKS[ BoundType.COMMA_MEAN ],
        score: 131 as Score,
        possible: true,
        exact: false,
        totalDistance: 0.07887931138776594 as Sum<Abs<Cents>>,
        totalInaDistance: 0.4641843423502595 as Sum<Multiplier<Ina>>,
        tinaError: 0 as Multiplier<Tina>,
        initialPositionTinaDistance: -0.5613173198962398 as Multiplier<Tina>,
    }

    it("returns an analysis of the JI notation bound using its histories, including a consolidation of said bound histories, and its best possible bound history, and the difference between the bound and its initial position", (): void => {
        const actual = analyzeJiNotationBound(histories, jiNotationBound)

        const expected = {
            bestRank: RANKS[ BoundType.COMMA_MEAN ],
            initialPosition: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Pitch<{ rational: false }>,
            initialPositionTinaDistance: -0.5613148261064571 as Multiplier<Tina>,
            possibleBoundHistoryCount: 2 as Count<BoundHistoryAnalysis>,
            bestPossibleBoundHistoryAnalysis: expectedBestPossibleBoundHistoryAnalysis,
            bestPossibleBoundHistoryTotalDistance: 0.07887931138776594 as Cents,
            bestPossibleBoundHistoryTotalInaDistance: 0.4641843423502595 as Sum<Multiplier<Ina>>,
            boundHistoryConsolidation: {
                [ JiNotationLevel.ULTRA ]: [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<Bound>,
                        pitch: {
                            monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            scaler: SQRT_SCALER,
                        } as Pitch<{ rational: false }>,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundEvents: [
                            ".)/| '/|",
                            "47.5°233",
                        ] as Name<Bound>[],
                    },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<Bound>,
                        pitch: {
                            monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            scaler: SQRT_SCALER,
                        } as Pitch<{ rational: false }>,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundEvents: [
                            "164.5°809",
                        ] as Name<Bound>[],
                    },
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "47.5°233" as Name<Bound>,
                        pitch: {
                            monzo: APOTOME.monzo,
                            scaler: [47.5, 233],
                        } as Pitch<{ rational: false }>,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.INA_MIDPOINT ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundEvents: [
                            "164.5°809",
                        ] as Name<Bound>[],
                    },
                ],
                [ JiNotationLevel.INSANE ]: [
                    {
                        jiNotationLevel: JiNotationLevel.INSANE,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "164.5°809" as Name<Bound>,
                        pitch: {
                            monzo: APOTOME.monzo,
                            scaler: [164.5, 809],
                        } as Pitch<{ rational: false }>,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.INA_MIDPOINT ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundEvents: [] as Name<Bound>[],
                    },
                ],
            },
        }
        expect(actual).toEqual(expected)
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

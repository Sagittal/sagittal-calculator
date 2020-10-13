import { Abs, Cents, Count, Id, Monzo, Multiplier, Name, Scamon, SQRT_SCALER, Sum } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import {
    BoundClass,
    BoundType,
    Ina,
    JiNotationBoundClass,
    JiNotationLevel,
    Tina,
} from "../../../../../src/sagittal/notations/ji"
import { EXTREME_EDA, INSANE_EDA } from "../../../../../src/sagittal/notations/ji/levelEdas"
import { analyzeJiNotationBoundClass } from "../../../../../src/scripts/jiNotationBoundClass/boundClass"
import * as jiNotationLevels from "../../../../../src/scripts/jiNotationBoundClass/boundClass/levels"
import * as ranks from "../../../../../src/scripts/jiNotationBoundClass/boundClass/ranks"
import { BoundClassHistory } from "../../../../../src/scripts/jiNotationBoundClass/histories"
import { BoundClassEventAnalysis, BoundClassHistoryAnalysis, Score } from "../../../../../src/scripts/jiNotationBoundClass/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import { jiNotationBoundClassFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("analyzeJiNotationBound", (): void => {
    const notBestHistory: BoundClassHistory = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<BoundClass>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<BoundClass>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<BoundClass>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, INSANE_EDA],
            } as Scamon<{ rational: false }>,
            // This one gets rank 4
        },
    ]
    const bestHistory: BoundClassHistory = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<BoundClass>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<BoundClass>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [47.5, EXTREME_EDA],
            } as Scamon<{ rational: false }>,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<BoundClass>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, INSANE_EDA],
            } as Scamon<{ rational: false }>,
            // This one gets rank 1
        },
    ]
    const histories: BoundClassHistory[] = [
        notBestHistory,
        bestHistory,
    ]
    const jiNotationBoundClass: JiNotationBoundClass = {
        ...jiNotationBoundClassFixture,
        pitch: {
            monzo: APOTOME.monzo,
            scaler: [164.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        jiNotationLevels: [JiNotationLevel.ULTRA, JiNotationLevel.EXTREME, JiNotationLevel.INSANE],
        id: 47 as Id<JiNotationBoundClass>,
        boundType: BoundType.INA_MIDPOINT,
    }
    const expectedBestBoundClassHistoryBoundClassEventAnalyses: BoundClassEventAnalysis[] = [
        {
            jiNotationLevel: JiNotationLevel.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<BoundClass>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
            rank: RANKS[ BoundType.COMMA_MEAN ],
            distance: 0 as Abs<Cents>,
            inaDistance: 0 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<BoundClass>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [47.5, EXTREME_EDA],
            } as Scamon<{ rational: false }>,
            rank: RANKS[ BoundType.INA_MIDPOINT ],
            distance: 0.019171116563747148 as Abs<Cents>,
            inaDistance: 0.03929163848648158 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevel.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<BoundClass>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, INSANE_EDA],
            } as Scamon<{ rational: false }>,
            rank: RANKS[ BoundType.INA_MIDPOINT ],
            distance: 0.05970819482401879 as Abs<Cents>,
            inaDistance: 0.4248927038637779 as Multiplier<Ina>,
            exact: true,
        },
    ]
    const expectedBestPossibleBoundClassHistoryAnalysis: BoundClassHistoryAnalysis = {
        boundClassEventAnalyses: expectedBestBoundClassHistoryBoundClassEventAnalyses,
        pitch: {
            monzo: APOTOME.monzo,
            scaler: [164.5, INSANE_EDA],
        } as Scamon<{ rational: false }>,
        rank: RANKS[ BoundType.COMMA_MEAN ],
        score: 131 as Score,
        possible: true,
        exact: false,
        totalDistance: 0.07887931138776594 as Sum<Abs<Cents>>,
        totalInaDistance: 0.4641843423502595 as Sum<Multiplier<Ina>>,
        tinaError: 0 as Multiplier<Tina>,
        initialPositionTinaDistance: -0.5613173198962398 as Multiplier<Tina>,
    }

    it("returns an analysis of the JI notation bound class using its histories, including a consolidation of said bound histories, and its best possible bound class history, and the difference between the bound and its initial position", (): void => {
        const actual = analyzeJiNotationBoundClass(histories, jiNotationBoundClass)

        const expected = {
            bestRank: RANKS[ BoundType.COMMA_MEAN ],
            initialPosition: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Scamon<{ rational: false }>,
            initialPositionTinaDistance: -0.5613173198962398 as Multiplier<Tina>,
            possibleBoundClassHistoryCount: 2 as Count<BoundClassHistoryAnalysis>,
            bestPossibleBoundClassHistoryAnalysis: expectedBestPossibleBoundClassHistoryAnalysis,
            bestPossibleBoundClassHistoryTotalDistance: 0.07887931138776594 as Sum<Abs<Cents>>,
            bestPossibleBoundClassHistoryTotalInaDistance: 0.4641843423502595 as Sum<Multiplier<Ina>>,
            boundClassHistoryConsolidation: {
                [ JiNotationLevel.ULTRA ]: [
                    {
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<BoundClass>,
                        pitch: {
                            monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            scaler: SQRT_SCALER,
                        } as Scamon<{ rational: false }>,
                        isPossibleBoundClassHistoryMember: true,
                        isBestPossibleBoundClassHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundClassEvents: [
                            ".)/| '/|",
                            "47.5°233",
                        ] as Array<Name<BoundClass>>,
                    },
                ],
                [ JiNotationLevel.EXTREME ]: [
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<BoundClass>,
                        pitch: {
                            monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
                            scaler: SQRT_SCALER,
                        } as Scamon<{ rational: false }>,
                        isPossibleBoundClassHistoryMember: true,
                        isBestPossibleBoundClassHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundClassEvents: [
                            "164.5°809",
                        ] as Array<Name<BoundClass>>,
                    },
                    {
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "47.5°233" as Name<BoundClass>,
                        pitch: {
                            monzo: APOTOME.monzo,
                            scaler: [47.5, EXTREME_EDA],
                        } as Scamon<{ rational: false }>,
                        isPossibleBoundClassHistoryMember: true,
                        isBestPossibleBoundClassHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.INA_MIDPOINT ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundClassEvents: [
                            "164.5°809",
                        ] as Array<Name<BoundClass>>,
                    },
                ],
                [ JiNotationLevel.INSANE ]: [
                    {
                        jiNotationLevel: JiNotationLevel.INSANE,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "164.5°809" as Name<BoundClass>,
                        pitch: {
                            monzo: APOTOME.monzo,
                            scaler: [164.5, INSANE_EDA],
                        } as Scamon<{ rational: false }>,
                        isPossibleBoundClassHistoryMember: true,
                        isBestPossibleBoundClassHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.INA_MIDPOINT ],
                        rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
                        nextBoundClassEvents: [] as Array<Name<BoundClass>>,
                    },
                ],
            },
        }
        expect(actual).toEqual(expected)
    })

    it("updates the rank analysis", (): void => {
        spyOn(ranks, "updateRankAnalysis")

        analyzeJiNotationBoundClass(histories, jiNotationBoundClass)

        const expectedBestHistoryRank = RANKS[ BoundType.COMMA_MEAN ]
        expect(ranks.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, jiNotationBoundClass.id)
    })

    it("updates the JI notation level analysis", (): void => {
        spyOn(jiNotationLevels, "updateJiNotationLevelAnalysis")

        analyzeJiNotationBoundClass(histories, jiNotationBoundClass)

        expect(jiNotationLevels.updateJiNotationLevelAnalysis)
            .toHaveBeenCalledWith(expectedBestPossibleBoundClassHistoryAnalysis)
    })
})

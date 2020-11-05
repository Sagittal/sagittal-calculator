import {
    Abs,
    APOTOME,
    Cents,
    Count,
    HALF_SCALER,
    Index,
    Monzo,
    Multiplier,
    Name,
    Scamon,
    Sum,
} from "../../../../../src/general"
import {BoundClass, JiNotationBound} from "../../../../../src/sagittal"
import {BoundType, Ina, JiNotationBoundClass, JiNotationLevelId, Tina} from "../../../../../src/sagittal/notations"
import {EXTREME_EDA, INSANE_EDA} from "../../../../../src/sagittal/notations/ji/levelEdas"
import {analyzeJiNotationBoundClass} from "../../../../../src/scripts/jiNotationBoundClass/boundClass"
import * as jiNotationLevels from "../../../../../src/scripts/jiNotationBoundClass/boundClass/levels"
import * as ranks from "../../../../../src/scripts/jiNotationBoundClass/boundClass/ranks"
import {BoundHistory} from "../../../../../src/scripts/jiNotationBoundClass/histories"
import {BoundEventAnalysis, BoundHistoryAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/history"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {Score} from "../../../../../src/scripts/types"
import {jiNotationBoundClassFixture} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("analyzeJiNotationBoundClass", (): void => {
    const notBestHistory: BoundHistory = [
        {
            jiNotationLevel: JiNotationLevelId.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<JiNotationBound>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                scaler: HALF_SCALER,
            } as Scamon<{rational: false}>,
        },
        {
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<JiNotationBound>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                scaler: HALF_SCALER,
            } as Scamon<{rational: false}>,
        },
        {
            jiNotationLevel: JiNotationLevelId.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<JiNotationBound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            // This one gets rank 4
        },
    ]
    const bestHistory: BoundHistory = [
        {
            jiNotationLevel: JiNotationLevelId.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<JiNotationBound>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                scaler: HALF_SCALER,
            } as Scamon<{rational: false}>,
        },
        {
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<JiNotationBound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [47.5, EXTREME_EDA],
            } as Scamon<{rational: false}>,
        },
        {
            jiNotationLevel: JiNotationLevelId.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<JiNotationBound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            // This one gets rank 1
        },
    ]
    const histories: BoundHistory[] = [
        notBestHistory,
        bestHistory,
    ]
    const jiNotationBoundClass: JiNotationBoundClass = {
        ...jiNotationBoundClassFixture,
        pitch: {
            monzo: APOTOME.monzo,
            scaler: [164.5, INSANE_EDA],
        } as Scamon<{rational: false}>,
        jiNotationLevels: [JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
        boundType: BoundType.INA_MIDPOINT,
    }
    const boundClassIndex = 47 as Index<BoundClass>
    const expectedBestBoundHistoryBoundEventAnalyses: BoundEventAnalysis[] = [
        {
            jiNotationLevel: JiNotationLevelId.ULTRA,
            boundType: BoundType.COMMA_MEAN,
            name: ".)/| '/|" as Name<JiNotationBound>,
            pitch: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                scaler: HALF_SCALER,
            } as Scamon<{rational: false}>,
            rank: RANKS[BoundType.COMMA_MEAN],
            distance: 0 as Abs<Cents>,
            inaDistance: 0 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevelId.EXTREME,
            boundType: BoundType.INA_MIDPOINT,
            name: "47.5°233" as Name<JiNotationBound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [47.5, EXTREME_EDA],
            } as Scamon<{rational: false}>,
            rank: RANKS[BoundType.INA_MIDPOINT],
            distance: 0.019171116563747148 as Abs<Cents>,
            inaDistance: 0.03929163848648158 as Multiplier<Ina>,
            exact: false,
        },
        {
            jiNotationLevel: JiNotationLevelId.INSANE,
            boundType: BoundType.INA_MIDPOINT,
            name: "164.5°809" as Name<JiNotationBound>,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [164.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            rank: RANKS[BoundType.INA_MIDPOINT],
            distance: 0.05970819482401879 as Abs<Cents>,
            inaDistance: 0.4248927038637779 as Multiplier<Ina>,
            exact: true,
        },
    ]
    const expectedBestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis = {
        boundEventAnalyses: expectedBestBoundHistoryBoundEventAnalyses,
        pitch: {
            monzo: APOTOME.monzo,
            scaler: [164.5, INSANE_EDA],
        } as Scamon<{rational: false}>,
        rank: RANKS[BoundType.COMMA_MEAN],
        score: 131 as Score<BoundHistory>,
        possible: true,
        exact: false,
        totalDistance: 0.07887931138776594 as Sum<Abs<Cents>>,
        totalInaDistance: 0.4641843423502595 as Sum<Multiplier<Ina>>,
        tinaError: 0 as Multiplier<Tina>,
        initialPositionTinaDistance: -0.5613173198962398 as Multiplier<Tina>,
    }

    it("returns an analysis of the JI notation bound class using its histories, including a consolidation of said bound histories, and its best possible bound class history, and the difference between the bound and its initial position", (): void => {
        const actual = analyzeJiNotationBoundClass(histories, jiNotationBoundClass, boundClassIndex)

        const expected = {
            bestRank: RANKS[BoundType.COMMA_MEAN],
            initialPosition: {
                monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                scaler: HALF_SCALER,
            } as Scamon<{rational: false}>,
            initialPositionTinaDistance: -0.5613173198962398 as Multiplier<Tina>,
            possibleBoundHistoryCount: 2 as Count<BoundHistoryAnalysis>,
            bestPossibleBoundHistoryAnalysis: expectedBestPossibleBoundHistoryAnalysis,
            bestPossibleBoundHistoryTotalDistance: 0.07887931138776594 as Sum<Abs<Cents>>,
            bestPossibleBoundHistoryTotalInaDistance: 0.4641843423502595 as Sum<Multiplier<Ina>>,
            boundHistoryConsolidation: {
                [JiNotationLevelId.ULTRA]: [
                    {
                        jiNotationLevel: JiNotationLevelId.ULTRA,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<JiNotationBound>,
                        pitch: {
                            monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                            scaler: HALF_SCALER,
                        } as Scamon<{rational: false}>,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        nextBoundEvents: [
                            ".)/| '/|",
                            "47.5°233",
                        ] as Array<Name<JiNotationBound>>,
                    },
                ],
                [JiNotationLevelId.EXTREME]: [
                    {
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        boundType: BoundType.COMMA_MEAN,
                        name: ".)/| '/|" as Name<JiNotationBound>,
                        pitch: {
                            monzo: [-17, 11, -2, 0, 0, 0, 0, 1] as Monzo<{rational: true}>,
                            scaler: HALF_SCALER,
                        } as Scamon<{rational: false}>,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        nextBoundEvents: [
                            "164.5°809",
                        ] as Array<Name<JiNotationBound>>,
                    },
                    {
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "47.5°233" as Name<JiNotationBound>,
                        pitch: {
                            monzo: APOTOME.monzo,
                            scaler: [47.5, EXTREME_EDA],
                        } as Scamon<{rational: false}>,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.INA_MIDPOINT],
                        rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        nextBoundEvents: [
                            "164.5°809",
                        ] as Array<Name<JiNotationBound>>,
                    },
                ],
                [JiNotationLevelId.INSANE]: [
                    {
                        jiNotationLevel: JiNotationLevelId.INSANE,
                        boundType: BoundType.INA_MIDPOINT,
                        name: "164.5°809" as Name<JiNotationBound>,
                        pitch: {
                            monzo: APOTOME.monzo,
                            scaler: [164.5, INSANE_EDA],
                        } as Scamon<{rational: false}>,
                        isPossibleBoundHistoryMember: true,
                        isBestPossibleBoundHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: RANKS[BoundType.INA_MIDPOINT],
                        rankOfBestRankedMemberHistory: RANKS[BoundType.COMMA_MEAN],
                        nextBoundEvents: [] as Array<Name<JiNotationBound>>,
                    },
                ],
            },
        }
        expect(actual).toEqual(expected)
    })

    it("updates the rank analysis", (): void => {
        spyOn(ranks, "updateRankAnalysis")

        analyzeJiNotationBoundClass(histories, jiNotationBoundClass, boundClassIndex)

        const expectedBestHistoryRank = RANKS[BoundType.COMMA_MEAN]
        expect(ranks.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, boundClassIndex)
    })

    it("updates the JI notation level analysis", (): void => {
        spyOn(jiNotationLevels, "updateJiNotationLevelAnalysis")

        analyzeJiNotationBoundClass(histories, jiNotationBoundClass, boundClassIndex)

        expect(jiNotationLevels.updateJiNotationLevelAnalysis)
            .toHaveBeenCalledWith(expectedBestPossibleBoundHistoryAnalysis)
    })
})

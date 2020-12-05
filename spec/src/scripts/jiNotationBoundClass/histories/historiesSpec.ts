import {APOTOME, HALF_SCALER, Monzo, Name, Scamon} from "@sagittal/general"
import {
    BoundType,
    EXTREME_EDA,
    INSANE_EDA,
    JiNotationBound,
    JiNotationBoundClass,
    JiNotationLevelId,
    MEDIUM_EDA,
    ULTRA_EDA,
} from "@sagittal/system"
import {computeHistories} from "../../../../../src/scripts/jiNotationBoundClass/histories"
import {jiNotationBoundClassFixture} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeHistories", (): void => {
    it("given a JI notation bound class, returns an array of all of its possible histories", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [67.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            jiNotationLevels: [
                JiNotationLevelId.MEDIUM,
                JiNotationLevelId.ULTRA,
                JiNotationLevelId.EXTREME,
                JiNotationLevelId.INSANE,
            ],
        }

        const actual = computeHistories(jiNotationBoundClass)

        const expected = [
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, MEDIUM_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, ULTRA_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, EXTREME_EDA],
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<JiNotationBound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, INSANE_EDA],
                    } as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<JiNotationBound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: HALF_SCALER,
                    } as Scamon<{rational: false}>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })

    it("works for the final JI notation bound class", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: {
                monzo: APOTOME.monzo as Monzo<{rational: true}>,
                scaler: [404.5, INSANE_EDA],
            } as Scamon<{rational: false}>,
            jiNotationLevels: [JiNotationLevelId.MEDIUM, JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE],
        }

        const actual = computeHistories(jiNotationBoundClass)

        const expected = [
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [10.5, 21]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [116.5, 233]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "402.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [402.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [10.5, 21]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [116.5, 233]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "403.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [403.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [10.5, 21]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [116.5, 233]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "404.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [404.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [10.5, 21]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [116.5, 233]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [10.5, 21]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "402.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [402.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [10.5, 21]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "403.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [403.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [10.5, 21]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "404.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [404.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "10.5°21" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [10.5, 21]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [116.5, 233]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "402.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [402.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [116.5, 233]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "403.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [403.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [116.5, 233]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "404.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [404.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "116.5°233" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [116.5, 233]} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "402.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [402.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "403.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [403.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "404.5°809" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: [404.5, 809]} as Scamon<{rational: false}>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
                {
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "M|L" as Name<JiNotationBound>,
                    pitch: {monzo: APOTOME.monzo, scaler: HALF_SCALER} as Scamon<{rational: false}>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})

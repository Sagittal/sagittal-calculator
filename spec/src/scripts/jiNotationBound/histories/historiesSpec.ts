import { Monzo, Name, Pitch, Quotient, SQRT_SCALER } from "../../../../../src/general"
import { APOTOME } from "../../../../../src/sagittal"
import { Bound, BoundType, JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeHistories } from "../../../../../src/scripts/jiNotationBound/histories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeHistories", (): void => {
    it("given a JI notation bound, returns an array of all of its possible histories", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            pitch: {
                monzo: APOTOME.monzo,
                scaler: [67.5, 809] as Quotient,
            } as Pitch<{ rational: false }>,
            jiNotationLevels: [
                JiNotationLevel.MEDIUM,
                JiNotationLevel.ULTRA,
                JiNotationLevel.EXTREME,
                JiNotationLevel.INSANE,
            ],
        }

        const actual = computeHistories(jiNotationBound)

        const expected = [
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [1.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [4.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [19.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [65.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [66.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [67.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [68.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [17, -10, 1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<Bound>,
                    pitch: {
                        monzo: [0, 3, 0, 1, -1, 0, -1],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Bound>,
                    pitch: {
                        monzo: [-10, -2, 0, 1, 3],
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })

    it("works for the final JI notation bound", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            pitch: {
                monzo: [-30, 19] as Monzo<{ rational: true }>,
                scaler: SQRT_SCALER,
            } as Pitch<{ rational: false }>,
            jiNotationLevels: [
                JiNotationLevel.MEDIUM,
                JiNotationLevel.HIGH,
                JiNotationLevel.ULTRA,
                JiNotationLevel.EXTREME,
                JiNotationLevel.INSANE,
            ],
        }

        const actual = computeHistories(jiNotationBound)

        const expected = [
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [485.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [486.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [487.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [485.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [486.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [487.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [485.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [486.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [487.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [485.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [486.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [487.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [12.5, 21] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [485.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [486.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [487.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [485.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [486.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [487.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [34.5, 58] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [485.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [486.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [487.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [140.5, 233] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [485.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [486.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Bound>,
                    pitch: {
                        monzo: APOTOME.monzo,
                        scaler: [487.5, 809] as Quotient,
                    } as Pitch<{ rational: false }>,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Bound>,
                    pitch: {
                        monzo: [-30, 19] as Monzo<{ rational: true }>,
                        scaler: SQRT_SCALER,
                    } as Pitch<{ rational: false }>,
                },
            ],
        ]
        expect(actual).toEqual(expected)
    })
})

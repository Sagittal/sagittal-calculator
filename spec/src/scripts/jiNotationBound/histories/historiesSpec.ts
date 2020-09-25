import { Cents, Decimal, Name } from "../../../../../src/general"
import { BoundType, JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundPosition, computeHistories } from "../../../../../src/scripts/jiNotationBound/histories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeHistories", (): void => {
    it("given a JI notation bound, returns an array of all of its possible histories", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            decimal: 1.00550249862 as Decimal,  // 9.5¢
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
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<BoundPosition>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<BoundPosition>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<BoundPosition>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<BoundPosition>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<BoundPosition>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<BoundPosition>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<BoundPosition>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<BoundPosition>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<BoundPosition>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<BoundPosition>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<BoundPosition>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<BoundPosition>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<BoundPosition>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<BoundPosition>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<BoundPosition>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<BoundPosition>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "1.5°21" as Name<BoundPosition>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<BoundPosition>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<BoundPosition>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<BoundPosition>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<BoundPosition>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<BoundPosition>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<BoundPosition>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<BoundPosition>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<BoundPosition>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "4.5°58" as Name<BoundPosition>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<BoundPosition>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<BoundPosition>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<BoundPosition>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<BoundPosition>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "19.5°233" as Name<BoundPosition>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "65.5°809" as Name<BoundPosition>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "66.5°809" as Name<BoundPosition>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "67.5°809" as Name<BoundPosition>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "68.5°809" as Name<BoundPosition>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.COMMA_MEAN,
                    name: "|( )|(" as Name<BoundPosition>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.COMMA_MEAN,
                    name: "~| )|(" as Name<BoundPosition>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<BoundPosition>,
                    cents: 9.434865 as Cents,
                },
            ],
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })

    it("works for the final JI notation bound", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            decimal: 1.04040393192 as Decimal,  // 68.572508¢
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
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<BoundPosition>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<BoundPosition>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<BoundPosition>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<BoundPosition>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<BoundPosition>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<BoundPosition>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<BoundPosition>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<BoundPosition>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<BoundPosition>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<BoundPosition>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<BoundPosition>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<BoundPosition>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "12.5°21" as Name<BoundPosition>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<BoundPosition>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<BoundPosition>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<BoundPosition>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<BoundPosition>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<BoundPosition>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<BoundPosition>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "34.5°58" as Name<BoundPosition>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<BoundPosition>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<BoundPosition>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<BoundPosition>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "140.5°233" as Name<BoundPosition>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "485.5°809" as Name<BoundPosition>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "486.5°809" as Name<BoundPosition>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.INA_MIDPOINT,
                    name: "487.5°809" as Name<BoundPosition>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    boundType: BoundType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<BoundPosition>,
                    cents: 68.572508 as Cents,
                },
            ],
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})

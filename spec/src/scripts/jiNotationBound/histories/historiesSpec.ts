import { Cents, Name, Pitch } from "../../../../../src/general"
import { JiNotationBound, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeHistories, EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { jiNotationBoundFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeHistories", (): void => {
    it("given a JI notation bound, returns an array of all of its possible histories", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            cents: 9.5 as Cents as Cents,
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
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Pitch>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Pitch>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Pitch>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Pitch>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Pitch>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Pitch>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Pitch>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Pitch>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Pitch>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Pitch>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Pitch>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Pitch>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Pitch>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Pitch>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Pitch>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Pitch>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "1.5°21" as Name<Pitch>,
                    cents: 8.120357 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Pitch>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Pitch>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Pitch>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Pitch>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Pitch>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Pitch>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Pitch>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Pitch>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "4.5°58" as Name<Pitch>,
                    cents: 8.820388 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Pitch>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Pitch>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Pitch>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Pitch>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "19.5°233" as Name<Pitch>,
                    cents: 9.514410 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "65.5°809" as Name<Pitch>,
                    cents: 9.204410 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "66.5°809" as Name<Pitch>,
                    cents: 9.344935 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "67.5°809" as Name<Pitch>,
                    cents: 9.485460 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "68.5°809" as Name<Pitch>,
                    cents: 9.625986 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.COMMA_MEAN,
                    name: "|( )|(" as Name<Pitch>,
                    cents: 7.722881 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.COMMA_MEAN,
                    name: "~| )|(" as Name<Pitch>,
                    cents: 9.208778 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.COMMA_MEAN,
                    name: ",)|( )|(" as Name<Pitch>,
                    cents: 9.434865 as Cents,
                },
            ],
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })

    it("works for the final JI notation bound", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            cents: 68.572508 as Cents as Cents,
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
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Pitch>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Pitch>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Pitch>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Pitch>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Pitch>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Pitch>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Pitch>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Pitch>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Pitch>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Pitch>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Pitch>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Pitch>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.INA_MIDPOINT,
                    name: "12.5°21" as Name<Pitch>,
                    cents: 67.669646 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Pitch>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Pitch>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Pitch>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Pitch>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Pitch>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Pitch>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.INA_MIDPOINT,
                    name: "34.5°58" as Name<Pitch>,
                    cents: 67.622977 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Pitch>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Pitch>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Pitch>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.INA_MIDPOINT,
                    name: "140.5°233" as Name<Pitch>,
                    cents: 68.552546 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "485.5°809" as Name<Pitch>,
                    cents: 68.225056 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "486.5°809" as Name<Pitch>,
                    cents: 68.365581 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.INA_MIDPOINT,
                    name: "487.5°809" as Name<Pitch>,
                    cents: 68.506106 as Cents,
                },
            ],
            [
                {
                    jiNotationLevel: JiNotationLevel.MEDIUM,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.HIGH,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.ULTRA,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.EXTREME,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
                {
                    jiNotationLevel: JiNotationLevel.INSANE,
                    type: EventType.SIZE_CATEGORY_BOUND,
                    name: "L|SS" as Name<Pitch>,
                    cents: 68.572508 as Cents,
                },
            ],
        ]
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })
})

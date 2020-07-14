import { Cents } from "../../../../../src/general"
import { Bound, Level } from "../../../../../src/notations/ji"
import { computeHistories } from "../../../../../src/scripts/analyzeBounds/plot"
import { EventType } from "../../../../../src/scripts/analyzeBounds/types"
import { boundFixture } from "../../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeHistories", () => {
    it("given a bound, returns an array of all of its possible histories", () => {
        const bound: Bound = {
            ...boundFixture,
            cents: 9.5 as Cents,
            levels: [Level.MEDIUM, Level.ULTRA, Level.EXTREME, Level.INSANE],
        }

        const result = computeHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "65.5°809",
                    cents: 9.204410255599667,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "66.5°809",
                    cents: 9.344935603013402,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "67.5°809",
                    cents: 9.485460950427138,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "68.5°809",
                    cents: 9.625986297840873,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "65.5°809",
                    cents: 9.204410255599667,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "66.5°809",
                    cents: 9.344935603013402,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "67.5°809",
                    cents: 9.485460950427138,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "68.5°809",
                    cents: 9.625986297840873,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "65.5°809",
                    cents: 9.204410255599667,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "66.5°809",
                    cents: 9.344935603013402,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "67.5°809",
                    cents: 9.485460950427138,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "68.5°809",
                    cents: 9.625986297840873,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "65.5°809",
                    cents: 9.204410255599667,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "66.5°809",
                    cents: 9.344935603013402,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "67.5°809",
                    cents: 9.485460950427138,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "68.5°809",
                    cents: 9.625986297840873,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "1.5°21",
                    cents: 8.120357575550852,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "65.5°809",
                    cents: 9.204410255599667,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "66.5°809",
                    cents: 9.344935603013402,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "67.5°809",
                    cents: 9.485460950427138,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "68.5°809",
                    cents: 9.625986297840873,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "65.5°809",
                    cents: 9.204410255599667,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "66.5°809",
                    cents: 9.344935603013402,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "67.5°809",
                    cents: 9.485460950427138,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "68.5°809",
                    cents: 9.625986297840873,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "4.5°58",
                    cents: 8.820388401029373,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "65.5°809",
                    cents: 9.204410255599667,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "66.5°809",
                    cents: 9.344935603013402,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "67.5°809",
                    cents: 9.485460950427138,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "68.5°809",
                    cents: 9.625986297840873,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "19.5°233",
                    cents: 9.514410378220525,
                },
                {
                    level: Level.INSANE,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "65.5°809",
                    cents: 9.204410255599667,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "66.5°809",
                    cents: 9.344935603013402,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "67.5°809",
                    cents: 9.485460950427138,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "68.5°809",
                    cents: 9.625986297840873,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.MEAN,
                    name: "|( )|(",
                    cents: 7.72288142310195,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.MEAN,
                    name: "~| )|(",
                    cents: 9.208778600061725,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
                {
                    level: Level.INSANE,
                    type: EventType.MEAN,
                    name: ",)|( )|(",
                    cents: 9.434865916310185,
                },
            ],
        ]))
    })

    it("works for the final bound", () => {
        const bound: Bound = {
            ...boundFixture,
            cents: 68.5725082211804 as Cents,
            levels: [Level.MEDIUM, Level.HIGH, Level.ULTRA, Level.EXTREME, Level.INSANE],
        }

        const result = computeHistories(bound)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "485.5°809",
                    cents: 68.22505616936851,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "486.5°809",
                    cents: 68.36558151678226,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "487.5°809",
                    cents: 68.50610686419598,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "485.5°809",
                    cents: 68.22505616936851,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "486.5°809",
                    cents: 68.36558151678226,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "487.5°809",
                    cents: 68.50610686419598,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "485.5°809",
                    cents: 68.22505616936851,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "486.5°809",
                    cents: 68.36558151678226,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "487.5°809",
                    cents: 68.50610686419598,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "485.5°809",
                    cents: 68.22505616936851,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "486.5°809",
                    cents: 68.36558151678226,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "487.5°809",
                    cents: 68.50610686419598,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.INA,
                    name: "12.5°21",
                    cents: 67.66964646292375,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "485.5°809",
                    cents: 68.22505616936851,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "486.5°809",
                    cents: 68.36558151678226,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "487.5°809",
                    cents: 68.50610686419598,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "485.5°809",
                    cents: 68.22505616936851,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "486.5°809",
                    cents: 68.36558151678226,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "487.5°809",
                    cents: 68.50610686419598,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.INA,
                    name: "34.5°58",
                    cents: 67.62297774122518,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "485.5°809",
                    cents: 68.22505616936851,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "486.5°809",
                    cents: 68.36558151678226,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "487.5°809",
                    cents: 68.50610686419598,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.INA,
                    name: "140.5°233",
                    cents: 68.55254657128121,
                },
                {
                    level: Level.INSANE,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "485.5°809",
                    cents: 68.22505616936851,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "486.5°809",
                    cents: 68.36558151678226,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.INA,
                    name: "487.5°809",
                    cents: 68.50610686419598,
                },
            ],
            [
                {
                    level: Level.MEDIUM,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.HIGH,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.ULTRA,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.EXTREME,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
                {
                    level: Level.INSANE,
                    type: EventType.SIZE,
                    name: "L|SS",
                    cents: 68.5725082211804,
                },
            ],
        ]))
    })
})

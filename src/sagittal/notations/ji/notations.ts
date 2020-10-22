import {computeRange, Decimal, Id} from "../../../general"
import {Flacco} from "../../accidental"
import {CommaClass} from "../../ji"
import {Notation} from "../types"
import {BoundClass} from "./types"

const MEDIUM_NOTATION: Notation = {
    commaClassIds: [
        0, 12, 20, 30, 44, 58, 70, 84, 92, 104, 114,        // Total 11
    ] as Array<Id<CommaClass>>,
    boundClassIds: [
        5, 16, 27, 38, 51, 63, 74, 86, 96, 109, 122,        // Total 11
    ] as Array<Id<BoundClass>>,
    flaccoIds: [
        0, 12, 20, 30, 44, 58, 70, 84, 92, 104, 114,
        131, 141,                                           // Extra 2, total 13
    ] as Array<Id<Flacco>>,
}

const HIGH_NOTATION: Notation = {
    commaClassIds: [
        0, 7, 12, 18, 20, 25, 30, 34, 36, 41, 44, 52, 58, 65, 67,
        70, 76, 81, 84, 86, 92, 99, 104, 106, 114, 117, 122,        // Total 27
    ] as Array<Id<CommaClass>>,
    boundClassIds: [
        2, 9, 13, 18, 22, 27, 31, 35, 38, 41, 46, 55, 60, 65, 68,
        72, 79, 81, 85, 89, 96, 101, 105, 111, 115, 120, 122,       // Total 27
    ] as Array<Id<BoundClass>>,
    flaccoIds: [
        0, 7, 12, 18, 20, 25, 30, 34, 36, 41, 44, 52, 58, 65, 67,
        70, 76, 81, 84, 86, 92, 99, 104, 106, 114, 117, 122,
        128, 131, 139, 141, 146,                                    // Extra 5, total 32
    ] as Array<Id<Flacco>>,
}

const ULTRA_NOTATION: Notation = {
    commaClassIds: [
        0, 3, 4, 7, 12, 14, 16, 18, 20, 24, 25, 26, 30, 34, 36, 40, 41,
        44, 47, 48, 52, 54, 58, 62, 65, 66, 67, 70, 74, 76, 79, 80, 81,
        84, 86, 88, 92, 96, 99, 104, 106, 108, 110, 114, 117, 119, 122,     // Total 47
    ] as Array<Id<CommaClass>>,
    boundClassIds: [
        2, 3, 5, 9, 13, 14, 16, 18, 22, 24, 25, 27, 31, 35, 38, 40, 41,
        46, 47, 49, 52, 55, 60, 63, 65, 66, 68, 72, 74, 77, 79, 80, 81,
        85, 86, 89, 94, 96, 101, 105, 106, 109, 111, 115, 118, 120, 122,    // Total 47
    ] as Array<Id<BoundClass>>,
    flaccoIds: [
        0, 3, 4, 7, 12, 14, 16, 18, 20, 24, 25, 26, 30, 34, 36, 40, 41,
        44, 47, 48, 52, 54, 58, 62, 65, 66, 67, 70, 74, 76, 79, 80, 81,
        84, 86, 88, 92, 96, 99, 104, 106, 108, 110, 114, 117, 119, 122,
        126, 128, 131, 135, 137, 139, 141, 146,                             // Extra 8, total 55
    ] as Array<Id<Flacco>>,
}

const EXTREME_NOTATION: Notation = {
    commaClassIds: computeRange(
        123 as Decimal<{integer: true}>,                                  // Total 123
    ) as Array<Decimal<{integer: true}>> as Array<Id<CommaClass>>,
    boundClassIds: computeRange(
        123 as Decimal<{integer: true}>,                                  // Total 123
    ) as Array<Decimal<{integer: true}>> as Array<Id<BoundClass>>,
    flaccoIds: computeRange(
        149 as Decimal<{integer: true}>,                                  // Extra 26, total 123
    ) as Array<Decimal<{integer: true}>> as Array<Id<Flacco>>,
}

export {
    MEDIUM_NOTATION,
    HIGH_NOTATION,
    ULTRA_NOTATION,
    EXTREME_NOTATION,
}

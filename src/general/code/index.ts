import { ACCURACY_THRESHOLD } from "./constants"
import { computeDeepClone } from "./deepClone"
import { computeDeepDistinct } from "./deepDistinct"
import { deepEquals } from "./deepEquals"
import { doOnNextEventLoop } from "./doOnNextEventLoop"
import { computeIsCloseTo } from "./isCloseTo"
import { merge } from "./merge"
import { computePlusOrMinusRange } from "./plusOrMinusRange"
import { computeRange } from "./range"
import { fractionallyRank } from "./rank"
import { shuffle } from "./shuffle"
import { isNumber, isUndefined } from "./typeGuards"

export {
    computeDeepClone,
    computeDeepDistinct,
    computeIsCloseTo,
    computePlusOrMinusRange,
    deepEquals,
    merge,
    isNumber,
    isUndefined,
    computeRange,
    doOnNextEventLoop,
    shuffle,
    fractionallyRank,
    ACCURACY_THRESHOLD,
}

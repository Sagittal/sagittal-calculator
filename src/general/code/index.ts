import { ACCURACY_THRESHOLD } from "./constants"
import { computeDeepClone } from "./deepClone"
import { computeDeepDistinct } from "./deepDistinct"
import { deepEquals } from "./deepEquals"
import { dig } from "./dig"
import { doOnNextEventLoop } from "./doOnNextEventLoop"
import { computeExtensionBase } from "./extensionBase"
import { computeIsCloseTo } from "./isCloseTo"
import { merge } from "./merge"
import { computePlusOrMinusRange } from "./plusOrMinusRange"
import { computeRange } from "./range"
import { rank } from "./rank"
import { shuffle } from "./shuffle"
import { sort } from "./sort"
import { computeTrimmedArray } from "./trim"
import { isNumber, isUndefined } from "./typeGuards"
import { ExtensionBaseType, Rank, Ranked, RankStrategy } from "./types"

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
    rank,
    ACCURACY_THRESHOLD,
    sort,
    dig,
    Rank,
    Ranked,
    RankStrategy,
    computeTrimmedArray,
    computeExtensionBase,
    ExtensionBaseType,
}

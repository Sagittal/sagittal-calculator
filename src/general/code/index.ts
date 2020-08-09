import { computeDeepClone } from "./deepClone"
import { computeDeepDistinct } from "./deepDistinct"
import { deepEquals } from "./deepEquals"
import { doOnNextEventLoop } from "./doOnNextEventLoop"
import { computeIsCloseTo } from "./isCloseTo"
import { merge } from "./merge"
import { computePlusOrMinusRange } from "./plusOrMinusRange"
import { shuffle } from "./shuffle"
import { isNumber, isUndefined } from "./typeGuards"
import { EnumHash } from "./types"

export {
    computeDeepClone,
    computeDeepDistinct,
    computeIsCloseTo,
    computePlusOrMinusRange,
    deepEquals,
    merge,
    isNumber,
    isUndefined,
    EnumHash, // TODO: I think maybe the built in Record<> just works for this
    doOnNextEventLoop,
    shuffle,
}

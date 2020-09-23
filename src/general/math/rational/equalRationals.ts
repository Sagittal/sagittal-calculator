import { isUndefined } from "../../code"
import { computeMonzoFromRational, equalMonzos, equalRatios } from "../../math"
import { Rational } from "./types"

const equalRationals = (rationalA: Rational, rationalB: Rational): boolean => {
    if (!isUndefined(rationalA.ratio) && !isUndefined(rationalB.ratio)) {
        return equalRatios(rationalA.ratio, rationalB.ratio)
    }

    if (!isUndefined(rationalA.monzo) && !isUndefined(rationalB.monzo)) {
        return equalMonzos(rationalA.monzo, rationalB.monzo)
    }

    return equalMonzos(computeMonzoFromRational(rationalA), computeMonzoFromRational(rationalB))
}

export {
    equalRationals,
}

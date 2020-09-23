import { computeTrimmedArray } from "../../../code"
import { Rational, RationalTypeParameters } from "../types"
import { computeMonzoFromRatio } from "./monzoFromRatio"
import { Monzo } from "./types"

const computeMonzoFromRational = <T extends RationalTypeParameters>(rational: Rational<T>): Monzo<T> => {
    return computeTrimmedArray(rational.monzo || computeMonzoFromRatio(rational.ratio!))
}

export {
    computeMonzoFromRational,
}

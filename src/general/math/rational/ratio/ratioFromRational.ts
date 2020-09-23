import { Rational, RationalTypeParameters } from "../types"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { Ratio } from "./types"

const computeRatioFromRational = <T extends RationalTypeParameters>(rational: Rational<T>): Ratio<T> => {
    return rational.ratio || computeRatioFromMonzo<T>(rational.monzo!)
}

export {
    computeRatioFromRational,
}

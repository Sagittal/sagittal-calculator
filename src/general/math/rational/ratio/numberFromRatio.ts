import { Numeric, NumericTypeParameters } from "../../types"
import { PotentiallyIrrationalRatioParameter } from "./types"

const computeNumberFromRatio = <T extends NumericTypeParameters>(
    [numerator, denominator]: PotentiallyIrrationalRatioParameter<T>,
): Numeric<T> => {
    return numerator / denominator as Numeric<T>
}

export {
    computeNumberFromRatio,
}

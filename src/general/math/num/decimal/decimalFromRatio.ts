import { Ratio } from "../ratio"
import { NumTypeParameters } from "../types"
import { Decimal } from "./types"

const computeDecimalFromRatio = <T extends NumTypeParameters>([numerator, denominator]: Ratio<T>): Decimal<T> =>
    numerator / denominator as Decimal<T>


export {
    computeDecimalFromRatio,
}

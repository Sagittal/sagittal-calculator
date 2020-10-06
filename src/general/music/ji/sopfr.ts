import { computeRationalMonzoSopfr, NumericProperties, Sopfr } from "../../math"
import { Pitch } from "../pitch"

const computeJiPitchSopfr = <T extends NumericProperties>({ monzo }: Pitch<T & { rational: true }>): Sopfr<T> =>
    computeRationalMonzoSopfr(monzo)

export {
    computeJiPitchSopfr,
}

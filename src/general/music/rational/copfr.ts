import { computeRationalMonzoCopfr, Copfr, NumericProperties } from "../../math"
import { Pitch } from "../pitch"

// Count Of Prime Factors with Repetition (big omega)

const computeJiPitchCopfr = <T extends NumericProperties>({ monzo }: Pitch<T & { rational: true }>): Copfr<T> =>
    computeRationalMonzoCopfr(monzo)

export {
    computeJiPitchCopfr,
}

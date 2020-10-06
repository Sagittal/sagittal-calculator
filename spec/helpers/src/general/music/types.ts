import { Decimal, Monzo, NumericProperties } from "../../../../../src/general/math/numeric"
import { Cents, Pitch } from "../../../../../src/general/music"

type PitchAnalysis<T extends NumericProperties = {}> = {
    pitch: Pitch<T>,
    cents: Cents,
    decimal: Decimal<T>,
    monzo: Monzo<T>,
}

export {
    PitchAnalysis,
}

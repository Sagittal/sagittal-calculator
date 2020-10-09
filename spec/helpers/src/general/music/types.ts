import { Decimal, Monzo, NumericProperties, Scamon } from "../../../../../src/general/math/numeric"
import { Cents } from "../../../../../src/general/music"

type PitchAnalysis<T extends NumericProperties = {}> = {
    pitch: Scamon<T>,
    cents: Cents,
    decimal: Decimal<T>,
    monzo: Monzo<T>,
}

export {
    PitchAnalysis,
}

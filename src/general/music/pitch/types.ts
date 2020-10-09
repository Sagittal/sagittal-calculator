import { Monzo, NumericProperties, NumericPropertyEffects, Quotient } from "../../math"
import { Degree } from "../../types"

type Pitch<T extends NumericProperties = {}> =
    {
        monzo: Monzo<T & { rational: true }>,
        scaler: never,
    } & NumericPropertyEffects<T & { rational: true }>
    | {
        monzo: Monzo<T & { rational: true }>,
        scaler: Quotient | Degree,
    } & NumericPropertyEffects<T & { rational: false }>

type Interval<T extends NumericProperties = {}> = Pitch<T> & { _IntervalBrand: boolean }

export {
    Pitch,
    Interval,
}

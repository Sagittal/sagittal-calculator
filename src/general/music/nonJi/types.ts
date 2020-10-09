import { Monzo, NumericProperties, NumericPropertyEffects, Quotient } from "../../math"
import { Degree } from "../../types"

type NonJiPitch<T extends NumericProperties = {}> = {
    monzo: Monzo<T & { rational: true }>,
    scaler: Quotient | Degree,
} & NumericPropertyEffects<T & { integer: false, rational: false }>

export {
    NonJiPitch,
}

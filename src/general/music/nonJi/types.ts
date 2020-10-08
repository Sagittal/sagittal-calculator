import { Monzo, NumericProperties, NumericPropertyEffects, Quotient } from "../../math"

type NonJiPitch<T extends NumericProperties = {}> = {
    monzo: Monzo<T & { rational: true }>,
    scaler: Quotient,
} & NumericPropertyEffects<T & { integer: false, rational: false }>

export {
    NonJiPitch,
}

import { Monzo, NumericProperties, NumericPropertyEffects, Quotient } from "../../math"

type Pitch<T extends NumericProperties = {}> = JiPitch<T> | NonJiPitch<T>

type JiPitch<T extends NumericProperties = {}> = {
    monzo: Monzo<T & { rational: true }>,
    scaler: never,
} & NumericPropertyEffects<T & { rational: true }>

type NonJiPitch<T extends NumericProperties = {}> = {
    monzo: Monzo<T & { rational: true }>,
    scaler: Quotient,
} & NumericPropertyEffects<T & { integer: false, rational: false }>

export {
    Pitch,
}

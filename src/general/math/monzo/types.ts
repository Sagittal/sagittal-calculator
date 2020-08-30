import { Exponent, Integer, Prime } from "../types"

type Monzo<T extends number = Integer, Slice = void, Limit = void> =
    Array<T & Exponent<Prime>>
    & (Slice extends number ? { _MonzoSlice: Slice } : {})

export {
    Monzo,
}

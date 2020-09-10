import { Exponent, Prime } from "../types"
import { Direction, Monzo, NumericTypeParameters } from "./types"

const invertMonzo: {
    <T extends NumericTypeParameters = { irrational: true, direction: Direction.SUPER }>(monzo: Monzo<T>):
        Monzo<T & { direction: Direction.SUB }>,
    <T extends NumericTypeParameters = { irrational: true, direction: Direction.SUB }>(monzo: Monzo<T>):
        Monzo<T & { direction: Direction.SUPER }>,
    <T extends NumericTypeParameters = { irrational: true }>(monzo: Monzo<T>):
        Monzo<T>,
} = <T extends NumericTypeParameters = { irrational: true }>(monzo: Monzo<T>): Monzo<T> =>
    monzo.map(primeExponent => primeExponent === 0 ? 0 : -primeExponent as Exponent<Prime>) as Monzo<T>

export {
    invertMonzo,
}

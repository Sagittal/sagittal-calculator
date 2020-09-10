import { Exponent, Prime } from "../types"
import { Direction, Monzo, MonzoTypeParameters } from "./types"

const invertMonzo: {
    <T extends MonzoTypeParameters = { irrational: true, direction: Direction.SUPER }>(monzo: Monzo<T>):
        Monzo<T & { direction: Direction.SUB }>,
    <T extends MonzoTypeParameters = { irrational: true, direction: Direction.SUB }>(monzo: Monzo<T>):
        Monzo<T & { direction: Direction.SUPER }>,
    <T extends MonzoTypeParameters = { irrational: true }>(monzo: Monzo<T>):
        Monzo<T>,
} = <T extends MonzoTypeParameters = { irrational: true }>(monzo: Monzo<T>): Monzo<T> =>
    monzo.map(primeExponent => primeExponent === 0 ? 0 : -primeExponent as Exponent<Prime>) as Monzo<T>

export {
    invertMonzo,
}

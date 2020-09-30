import { Rational } from "../rational"
import { RealByDecimal } from "./decimal"
import { RealByMonzo } from "./monzo"
import { RealByQuotient } from "./quotient"

enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

type NumericProperties = Partial<{
    integer: boolean,
    irrational: boolean,
    direction: Direction
    rough: number,
    smooth: number,
}>

type NumTypeParameterEffects<T> =
    (T extends { direction: Direction.SUB } ? { _DirectionBrand: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _DirectionBrand: Direction.SUPER } : {})
    & (T extends { direction: Direction.UNISON } ? { _DirectionBrand: Direction.UNISON } : {})
    & (T extends { rough: number } ? { _RoughBrand: Pick<T, "rough"> } : {})
    & (T extends { smooth: number } ? { _SmoothBrand: Pick<T, "smooth"> } : {})
    & (T extends { rational: true } ? { _RationalBrand: boolean } : {})
    & (T extends { integer: true } ? { _IntegerBrand: boolean } : {})

type Real<T extends NumericProperties = {}> = Rational<T> | RealByDecimal<T> | RealByMonzo<T> | RealByQuotient<T>

export {
    NumericProperties,
    Direction,
    NumTypeParameterEffects,
    Real,
}

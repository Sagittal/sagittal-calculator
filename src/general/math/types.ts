import { MaybeIntegerBrand } from "./rational"

type Numeric<T extends NumericTypeParameters> = number & NumericTypeParameterEffects<T>

type Combination<T> = T[] & { _CombinationBrand: boolean }
type Combinations<T> = Array<Combination<T>> & { _CombinationsBrand: boolean }

type DistributionBin<T> = Combination<T> & { _DistributionBinBrand: boolean }
type Distribution<T> = Array<DistributionBin<T>> & { _DistributionBrand: boolean }

// Numeric types where parameter is also numeric
type Exponent<T extends number = number> = number & { _ExponentBrand: boolean, _ExponentOfBrand: T }
type Base<T extends number = number> = number & { _BaseBrand: boolean, _BaseOfBrand: T }
type Power<T extends number = number> = number & { _PowerBrand: boolean, _PowerOfBrand: T }

// Qualities of numerics
type Max<T extends number = number> = T & { _MaxBrand: boolean }
type Min<T extends number = number> = T & { _MinBrand: boolean }
type Abs<T extends number = number> = T & { _AbsBrand: boolean }
type Avg<T extends number = number> = T & { _AverageBrand: boolean }
type Approx<T extends number = number> = T & { _ApproxBrand: boolean }

enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

type NumericTypeParameters = Partial<{
    integer: boolean,
    irrational: boolean,
    direction: Direction
    rough: number,
    smooth: number,
    unreduced: boolean,
}>

type NumericTypeParameterEffects<T> =
    (T extends { direction: Direction.SUB } ? { _DirectionBrand: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _DirectionBrand: Direction.SUPER } : {})
    & (T extends { direction: Direction.UNISON } ? { _DirectionBrand: Direction.UNISON } : {})
    & (T extends { rough: number } ? { _RoughBrand: Pick<T, "rough"> } : {})
    & (T extends { smooth: number } ? { _SmoothBrand: Pick<T, "smooth"> } : {})
    & (T extends { irrational: true } ? { _IrrationalBrand: boolean } : {})
    & (T extends { unreduced: true } ? { _UnreducedBrand: boolean } : {})
    & MaybeIntegerBrand<T>

export {
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
    Exponent,
    Base,
    Power,
    Max,
    Min,
    Avg,
    Abs,
    NumericTypeParameters,
    Direction,
    NumericTypeParameterEffects,
    Numeric,
}

import { MaybeIntegerBrand, Monzo, Ratio, Rational } from "./rational"

type Numeric<T extends NumericTypeParameters = {}> = number & NumericTypeParameterEffects<T>

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

// TODO: starting to think about non-JI pitches
//  what about logarithmic pitch vs acoustic pitch
//  that could help answer the question about what to name that "pitchvalue" thing
//  e.g. how in Erv's writings about golden horograms
//  he names the pitches with values between 0 and 1, like 0.618...
//  that is logarithmic pitch and would require a second piece of information,
//  the 2, to understand what the base was
//  but actually if you combine those two things, you're still good
//  and continued fractions
//  like monzos, it may be a good idea to support those
//  so the continued fraction can be the exponent in this power
//  but it could also just be another option
/*
Base assume 2
Power - would be a ratio... but like 3/19 for degrees of 19...

Window (is the base, 2)
Ed (19)
Step (3)

call it a Power?
Er, a Power combines a Base and an Exponent

call it a Degree

the existing Window isn’t a base, it gets divided up additively, not multiplicatively
 */
type Irrational<T extends NumericTypeParameters = {}> = {
    number?: Numeric<T & { irrational: true }>,
    monzo?: Monzo<T & { irrational: true }>,
    ratio?: Ratio<T & { irrational: true }>,
}

type NumericType<T extends NumericTypeParameters = {}> = Rational<T & { irrational: false }> | Irrational<T>

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
    Irrational,
    NumericType,
}

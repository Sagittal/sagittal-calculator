import { MaybeIntegerBrand, Monzo, Ratio, RationalNum } from "./rational"

// TODO: Dec instead instead of Decimal? hmm... maybe not.
//  because we're not abbreviating Number to Num only bc we can but because we kind of have to.
//  and Decimal is a sibling to Monzo and Ratio, and should get its own folder neighboring them.
/*
IntNum and IntDecimal?

math/num/monzo
math/num/ratio
math/num/decimal

Bc integer, rational, and irrational are orthogonal to these

And perhaps these three subtypes should never be found outside a Num

And perhaps if you just manhandled it and had non-JI pitch be the intersection of four different types
and not even extend the num type it would work

And perhaps since both num and rational num do this triple intersection they should share some type they “extend”

Cents should really only be part of analyses
In which case pitches should not really be any different than nums....
 */
type Decimal<T extends NumTypeParameters = { potentiallyIrrational: true }> = number & NumTypeParameterEffects<T>
type DecimalNotDefaultingToPotentiallyIrrational<T extends NumTypeParameters = {}> = number & NumTypeParameterEffects<T>

type Combination<T> = T[] & { _CombinationBrand: boolean }
type Combinations<T> = Array<Combination<T>> & { _CombinationsBrand: boolean }

type DistributionBin<T> = Combination<T> & { _DistributionBinBrand: boolean }
type Distribution<T> = Array<DistributionBin<T>> & { _DistributionBrand: boolean }

// Numeric types where parameter is also numeric
type Exponent<T extends number = number> = number & { _ExponentBrand: boolean, _ExponentOfBrand: T }
type Base<T extends number = number> = number & { _BaseBrand: boolean, _BaseOfBrand: T }
type Power<T extends number = number> = number & { _PowerBrand: boolean, _PowerOfBrand: T }

// Qualities of numerics
type Abs<T extends number = number> = T & { _AbsBrand: boolean }
type Avg<T extends number = number> = T & { _AverageBrand: boolean }
type Approx<T extends number = number> = T & { _ApproxBrand: boolean }

// Experimenting with not necessarily applying to numbers,
// though it seems like plenty others of these might be flexible in that way too
type Max<T extends unknown = number> = T & { _MaxBrand: boolean }
type Min<T extends unknown = number> = T & { _MinBrand: boolean }

enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

type NumTypeParameters = Partial<{
    integer: boolean,
    potentiallyIrrational: boolean,
    direction: Direction
    rough: number,
    smooth: number,
    potentiallyUnreduced: boolean,
}>

type NumTypeParameterEffects<T> =
    (T extends { direction: Direction.SUB } ? { _DirectionBrand: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _DirectionBrand: Direction.SUPER } : {})
    & (T extends { direction: Direction.UNISON } ? { _DirectionBrand: Direction.UNISON } : {})
    & (T extends { rough: number } ? { _RoughBrand: Pick<T, "rough"> } : {})
    & (T extends { smooth: number } ? { _SmoothBrand: Pick<T, "smooth"> } : {})
    & (T extends { potentiallyIrrational: true } ? { _PotentiallyIrrationalBrand: boolean } : {})
    & (T extends { potentiallyUnreduced: true } ? { _PotentiallyUnreducedBrand: boolean } : {})
    & MaybeIntegerBrand<T>

// TODO: IMPLEMENT EDO PITCHES ON POTENTIALLY IRRATIONAL NUMS
//  starting to think about non-JI pitches
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
//  - also think about how for dynamic parameters, unit: is a Step... but difference between a position and an interval
//  - could also represent numbers as continued fractions [3;1,1,1...]
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

// todo: DECIMAL & CENTS
//  really the PotentiallyIrrationalNum definition needs to be reworked in the manner of RationalNum
//  where it's an intersection type which ultimately forces at least one of the properties to be present even though
//  they are each optional
//  however if you go down this path (as commented out just below)
//  it forces your hand to make everything in the app which is hardcoded as cents only right now
//  to be hardcoded as number instead. which is really how it *should* be, so that non-ji pitches
//  can truly extend PotentiallyIrrationalNum without trying to achieve the whole thing i put in another to-do about
//  only one or the other of cents and decimal being required...
//  and which was another recent-ish to-do which I somehow/somewhy got rid of, perhaps because it seemed too hard
//  but I really think it's the right thing to do
// type PotentiallyIrrationalNumByDecimal<T> = {
//     decimal: Decimal<T>,
//     monzo?: Monzo<T>,
//     ratio?: Ratio<T>,
// }
// type PotentiallyIrrationalNumByMonzo<T> = {
//     decimal?: Decimal<T>,
//     monzo: Monzo<T>,
//     ratio?: Ratio<T>,
// }
// type PotentiallyIrrationalNumByRatio<T> = {
//     decimal?: Decimal<T>,
//     monzo?: Monzo<T>,
//     ratio: Ratio<T>,
// }
// type PotentiallyIrrationalNum<T extends NumTypeParameters = {}> =
//     PotentiallyIrrationalNumByDecimal<T & { potentiallyIrrational: true }> |
//     PotentiallyIrrationalNumByMonzo<T & { potentiallyIrrational: true }> |
//     PotentiallyIrrationalNumByRatio<T & { potentiallyIrrational: true }>

type PotentiallyIrrationalNum<T extends NumTypeParameters = {}> = {
    decimal?: Decimal<T & { potentiallyIrrational: true }>,
    monzo?: Monzo<T & { potentiallyIrrational: true }>,
    ratio?: Ratio<T & { potentiallyIrrational: true }>,
}
type Num<T extends NumTypeParameters = {}> =
    RationalNum<T & { potentiallyIrrational: false }> | PotentiallyIrrationalNum<T>

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
    NumTypeParameters,
    Direction,
    NumTypeParameterEffects,
    Decimal,
    PotentiallyIrrationalNum,
    Num,
    DecimalNotDefaultingToPotentiallyIrrational,
}

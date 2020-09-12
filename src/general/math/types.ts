import { Count, Sum } from "../types"

// TODO: Analyzed & Integer
//  - and if you could make Analyzed<> a parameterized thing like Formatted<>, of course it would be a bit different
//  because Formatted<> converts it from whatever object it is to a branded string, just with aspect of that object
//  whereas Analyzed would just extend the object
//  - okay how about this... you've been struggling with Analyzed vs Analysis 
//  so what if it was an Analysis<Thing>? that might help force you to think of it not as a Thing first but as an
//  Analysis first. and then maybe Formatted<Thing> can only be made out of some kind of an Analysis? well no that 
//  doens't work because you have all sorts of Formatted<number> and Formatted<Monzo>
//  - I want to be sensitive to the issue of the type names reading in a consistent direction
//  relative to the variable names, i.e. in the opposite order
//  like how primeExponentExtremas: Array<Extrema<Integer & Exponent<Prime>>>
//  so you'd have an analyzedJiPitch, which would be a Pitch<Ji<Analyzed>> by that pattern
//  but I'm sure you can see how that doesn't really make sense!
//  which maybe just means that the variable name should be jiPitchAnalyzed: Analyzed<Pitch<Ji>>
//  or per my above insight, would be jiPitchAnalysis = Analysis<Pitch<Ji>>
//  okay so would type Analysis<T> = T & T<"Analyzed"> which would allow you to write it like the above...
//  no wait, then "Analyzed" would conflict with the Ji part...
//  (although now that you've mastered the art of a type parameter object, you could have { analyzed: true })
//  - also consider how Rank<_, Integer> is how you make it an Integer... should that just be Integer & Rank?
//  like should Ji<T> just mean Integer & T?
//  yeah but you wouldn't want a Just Intoned Rank... so you should probably have it be Whole<>
//  except Whole numbers are technically only positive... so wouldn't it just be Integer<>?
//  why isn't Integer already parameterized? or is it?
//  so i think this Integer/Whole parameterized thing is independent from the Ji pitch vs not Ji
//  because that's going to be its own thing entirely, where JI must hhave at least one of monzo and ratio
//  and non-JI must have at least one of value/cents and ED maybe
//  - Also parameteized types are great when realistically it could be a ton of different things
//  But avoid it when it’s just either number or integer...
//  - Also note though that there's no reason a plain old number couldn't take NumericTypeParameters
//  though of course Integer is key to enforcing the "irrational" bit, so its on a lower level
//  maybe what I'm thinking about here is like, NumericTypeParameters would apply to PitchValue
//  or maybe more just like whatever Numerator and Denominator are
type Integer = number & { _IntegerBrand: "Integer" }
type Prime<T = void> = Integer & { _PrimeBrand: "Prime" } & (T extends void ? {} : T & { _PrimeOfBrand: T })
type Roughness = Integer & { _RoughnessBrand: "Roughness" }
type Smoothness = Integer & { _SmoothnessBrand: "Smoothness" }

type Combination<T> = T[] & { _CombinationBrand: "Combination" }
type Combinations<T> = Array<Combination<T>> & { _CombinationsBrand: "Combinations" }

type DistributionBin<T> = Combination<T> & { _DistributionBinBrand: "DistributionBin" }
type Distribution<T> = Array<DistributionBin<T>> & { _DistributionBrand: "Distribution" }

// Numeric types where parameter is also numeric
type Exponent<T extends number = number> = number & { _ExponentBrand: "Exponent", _ExponentOfBrand: T }
type Base<T extends number = number> = number & { _BaseBrand: "Base", _BaseOfBrand: T }
type Power<T extends number = number> = number & { _PowerBrand: "Power", _PowerOfBrand: T }

// Qualities of numerics
type Max<T extends number = number> = T & { _MaxBrand: "Max" }
type Min<T extends number = number> = T & { _MinBrand: "Min" }
type Abs<T extends number = number> = T & { _AbsBrand: "Abs" }
type Average<T extends number = number> = T & { _AverageBrand: "Average" }
type Approx<T extends number = number> = T & { _ApproxBrand: "Approx" }

type Sopfr<Roughness = void> = // TODO: this should be able to inherit roughness from the number it gets called with
    Sum<Prime>
    & { _SopfrBrand: "Sopfr" }
    & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})
type Copfr<Roughness = void> =
    Count<Prime>
    & { _CopfrBrand: "Copfr" }
    & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})

enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

type NumericTypeParameters = Partial<{
    limit: number,
    irrational: boolean,
    direction: Direction
    rough: number,
    smooth: number,
}>

type NumericTypeParameterEffects<T> =
    (T extends { direction: Direction.SUB } ? { _Direction: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _Direction: Direction.SUPER } : {})
    & (T extends { direction: Direction.UNISON } ? { _Direction: Direction.UNISON } : {})
    & (T extends { limit: number } ? { _Limit: Pick<T, "limit"> } : {})
    & (T extends { rough: number } ? { _Rough: Pick<T, "rough"> } : {})
    & (T extends { smooth: number } ? { _Smooth: Pick<T, "smooth"> } : {})

export {
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
    Exponent,
    Base,
    Power,
    Integer,
    Sopfr,
    Copfr,
    Prime,
    Roughness,
    Max,
    Min,
    Average,
    Abs,
    NumericTypeParameters,
    Direction,
    NumericTypeParameterEffects,
    Smoothness,
}

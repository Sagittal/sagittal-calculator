import { Count, Sum } from "../types"
import { NumericTypeParameters } from "./monzo"

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
type Integer = number & { _IntegerBrand: "Integer" }
type Prime<T = void> = Integer & { _PrimeBrand: "Prime" } & (T extends void ? {} : T & { _PrimeOfBrand: T })
type Roughness = Integer & { _RoughnessBrand: "Roughness" }

type Numerator<T extends number = Integer> = T & { _NumeratorBrand: "Numerator" }
type Denominator<T extends number = Integer> = T & { _DenominatorBrand: "Denominator" }
type Ratio<T extends NumericTypeParameters = {}> = [
    Numerator<(T extends { irrational: true } ? number : Integer)>, 
    Denominator<(T extends { irrational: true } ? number : Integer)>
]
// TODO: perhaps "undirected" should be another in the enum for Direction?
type UndirectedRatio<T extends NumericTypeParameters = {}> = Ratio<T> & { _UndirectedRatioBrand: "UndirectedRatio" }

enum FractionalPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type FractionalPart = Numerator | Denominator

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

export {
    Ratio,
    Numerator,
    Denominator,
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
    FractionalPartType,
    FractionalPart,
    Exponent,
    Base,
    Power,
    Integer,
    UndirectedRatio,
    Sopfr,
    Copfr,
    Prime,
    Roughness,
    Max,
    Min,
    Average,
    Abs,
}

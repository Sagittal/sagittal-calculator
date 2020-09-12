import { Count, Sum } from "../types"

// TODO: Analyzed
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

type Numeric<T extends NumericTypeParameters> = number & NumericTypeParameterEffects<T>
type Integer = Numeric<{ irrational: false }>

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

type Sopfr<T extends NumericTypeParameters & { irrational?: false } = { irrational: false }> =
    Sum<Prime>
    & { _SopfrBrand: "Sopfr" }
    & NumericTypeParameterEffects<T>
type Copfr<T extends NumericTypeParameters & { irrational?: false } = { irrational: false }> =
    Count<Prime>
    & { _CopfrBrand: "Copfr" }
    & NumericTypeParameterEffects<T>

enum Direction {
    SUPER = "super",
    SUB = "sub",
    UNISON = "unison",
}

type NumericTypeParameters = Partial<{
    irrational: boolean,
    direction: Direction
    rough: number,
    smooth: number,
}>
type RationalTypeParameters = NumericTypeParameters & { irrational: false }

type NumericTypeParameterEffects<T> =
    (T extends { direction: Direction.SUB } ? { _Direction: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _Direction: Direction.SUPER } : {})
    & (T extends { direction: Direction.UNISON } ? { _Direction: Direction.UNISON } : {})
    & (T extends { rough: number } ? { _Rough: Pick<T, "rough"> } : {})
    & (T extends { smooth: number } ? { _Smooth: Pick<T, "smooth"> } : {})

type Primes =
    2
    | 3
    | 5
    | 7
    | 11
    | 13
    | 17
    | 19
    | 23
    | 29
    | 31
    | 37
    | 41
    | 43
    | 47
    | 53
    | 59
    | 61
    | 67
    | 71
    | 73
    | 79
    | 83
    | 89
    | 97
    | 101
    | 103
    | 107
    | 109
    | 113
    | 127
    | 131
    | 137
    | 139
    | 149
    | 151
    | 157
    | 163
    | 167
    | 173
    | 179
    | 181
    | 191
    | 193
    | 197
    | 199
    | 211
    | 223
    | 227
    | 229
    | 233
    | 239
    | 241
    | 251
    | 257
    | 263
    | 269
    | 271
    | 277
    | 281
    | 283
    | 293
    | 307
    | 311
    | 313
    | 317
    | 331
    | 337
    | 347
    | 349
    | 353
    | 359
    | 367
    | 373
    | 379
    | 383
    | 389
    | 397
    | 401
    | 409
    | 419
    | 421
    | 431
    | 433
    | 439
    | 443
    | 449
    | 457
    | 461
    | 463
    | 467
    | 479
    | 487
    | 491
    | 499
    | 503
    | 509
    | 521
    | 523
    | 541
    | 547
    | 557
    | 563
    | 569
    | 571
    | 577
    | 587
    | 593
    | 599
    | 601
    | 607
    | 613
    | 617
    | 619
    | 631
    | 641
    | 643
    | 647
    | 653
    | 659
    | 661
    | 673
    | 677
    | 683
    | 691
    | 701
    | 709
    | 719
    | 727
    | 733
    | 739
    | 743
    | 751
    | 757
    | 761
    | 769
    | 773
    | 787
    | 797
    | 809
    | 811
    | 821
    | 823
    | 827
    | 829
    | 839
    | 853
    | 857
    | 859
    | 863
    | 877
    | 881
    | 883
    | 887
    | 907
    | 911
    | 919
    | 929
    | 937
    | 941
    | 947
    | 953
    | 967
    | 971
    | 977
    | 983
    | 991
    | 997

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
    Numeric,
    RationalTypeParameters,
    Primes,
}

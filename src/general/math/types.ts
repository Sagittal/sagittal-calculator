import { Count, Sum } from "../types"

type Numeric<T extends NumericTypeParameters> = number & NumericTypeParameterEffects<T>
type Integer<
    T extends NumericTypeParameters & { irrational: false, integer: true } = { irrational: false, integer: true }
> = Numeric<T>
type MaybeIntegerBrand<T> = T extends { integer: true } ? { _IntegerBrand: "Integer" } : {}

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
type Avg<T extends number = number> = T & { _AverageBrand: "Avg" }
type Approx<T extends number = number> = T & { _ApproxBrand: "Approx" }

type Sopfr<T extends NumericTypeParameters = {}> =
    Sum<Prime>
    & { _SopfrBrand: "Sopfr" }
    & NumericTypeParameterEffects<T>
type Copfr<T extends NumericTypeParameters = {}> =
    Count<Prime>
    & { _CopfrBrand: "Copfr" }
    & NumericTypeParameterEffects<T>

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
}>
type RationalTypeParameters = NumericTypeParameters & { irrational: false }
type IntegerTypeParameters = NumericTypeParameters & { integer: true, irrational: false }

type NumericTypeParameterEffects<T> =
    (T extends { direction: Direction.SUB } ? { _DirectionBrand: Direction.SUB } : {})
    & (T extends { direction: Direction.SUPER } ? { _DirectionBrand: Direction.SUPER } : {})
    & (T extends { direction: Direction.UNISON } ? { _DirectionBrand: Direction.UNISON } : {})
    & (T extends { rough: number } ? { _RoughBrand: Pick<T, "rough"> } : {})
    & (T extends { smooth: number } ? { _SmoothBrand: Pick<T, "smooth"> } : {})
    & (T extends { irrational: true } ? { _IrrationalBrand: "Irrational" } : {})
    & MaybeIntegerBrand<T>

type CommonFunction = (firstInteger: Integer, secondInteger: Integer) => Integer

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
    Avg,
    Abs,
    NumericTypeParameters,
    Direction,
    NumericTypeParameterEffects,
    Smoothness,
    Numeric,
    RationalTypeParameters,
    IntegerTypeParameters,
    Primes,
    MaybeIntegerBrand,
    CommonFunction,
}

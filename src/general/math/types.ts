import { Count, Sum } from "../types"

type Numerator = Integer & { _NumeratorBrand: "Numerator" }
type Denominator = Integer & { _DenominatorBrand: "Denominator" }
type Ratio = [Numerator, Denominator]
type UndirectedRatio = Ratio & { _UndirectedRatioBrand: "UndirectedRatio" }

type Combination<T> = T[] & { _CombinationBrand: "Combination" }
type Combinations<T> = Array<Combination<T>> & { _CombinationsBrand: "Combinations" }

type DistributionBin<T> = Combination<T> & { _DistributionBinBrand: "DistributionBin" }
type Distribution<T> = Array<DistributionBin<T>> & { _DistributionBrand: "Distribution" }

// Numeric types where parameter is also numeric
type Exponent<T extends number | void = void> =
    number
    & { _ExponentBrand: "Exponent" }
    & (T extends void ? {} : { _ExponentOfBrand: T })
type Base<T extends number | void = void> =
    number
    & { _BaseBrand: "Base" }
    & (T extends void ? {} : { _BaseOfBrand: T })
type Power<T extends number | void = void> =
    number
    & { _PowerBrand: "Power" }
    & (T extends void ? {} : { _PowerOfBrand: T })
type Integer<T extends number | void = void> =
    number
    & { _IntegerBrand: "Integer" }
    & (T extends void ? {} : { _IntegerOfBrand: T })

enum FractionalPart {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type Sopfr<Roughness = void> = Sum<Prime> & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})
type Copfr<Roughness = void> = Count<Prime> & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})

type Monzo<Slice = void, Limit = void> = Array<Exponent<Prime>> & (Slice extends number ? { _MonzoSlice: Slice } : {})

type Prime<T = void> = Integer & { _PrimeBrand: "Prime" } & (T extends void ? {} : T & { _PrimeOfBrand: T })

export {
    Ratio,
    Numerator,
    Denominator,
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
    FractionalPart,
    Exponent,
    Base,
    Power,
    Integer,
    UndirectedRatio,
    Monzo,
    Sopfr,
    Copfr,
    Prime,
}

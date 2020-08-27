import { Count, Sum } from "../types"

// TODO: you might want to bring in type guards and a test (not full-blown anti.test!) that Integer (and Omit) works
type Integer = number & { _IntegerBrand: "Integer" }
type Prime<T = void> = Integer & { _PrimeBrand: "Prime" } & (T extends void ? {} : T & { _PrimeOfBrand: T })
type Roughness = Integer & { _RoughnessBrand: "Roughness" }

type Numerator = Integer & { _NumeratorBrand: "Numerator" }
type Denominator = Integer & { _DenominatorBrand: "Denominator" }
type Ratio = [Numerator, Denominator]
type UndirectedRatio = Ratio & { _UndirectedRatioBrand: "UndirectedRatio" }
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
type Exponent<T extends number = number> = T & { _ExponentBrand: "Exponent" }
type Base<T extends number = number> = T & { _BaseBrand: "Base" }
type Power<T extends number = number> = T & { _PowerBrand: "Power" }
type Max<T extends number = number> = T & { _MaxBrand: "Max" }
type Min<T extends number = number> = T & { _MinBrand: "Min" }

type Sopfr<Roughness = void> = Sum<Prime> & { _SopfrBrand: "Sopfr" } & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})
type Copfr<Roughness = void> = Count<Prime> & { _CopfrBrand: "Copfr" } & (Roughness extends number ? { _RoughnessBrand: Roughness } : {})

type Monzo<Slice = void, Limit = void> = Array<Exponent<Prime>> & (Slice extends number ? { _MonzoSlice: Slice } : {})

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
    Monzo,
    Sopfr,
    Copfr,
    Prime,
    Roughness,
    Max,
    Min,
}

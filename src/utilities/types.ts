type Cents = number & { _CentsBrand: "Cents" }
type Numerator = number & { _NumeratorBrand: "Numerator" }
type Denominator = number & { _DenominatorBrand: "Denominator" }
type Prime = number & { _PrimeBrand: "Prime" }
type Proportion<ProportionOf = void> =
    number
    & { _ProportionBrand: "Proportion" }
    & (ProportionOf extends void ? {} : { _ProportionOfBrand: ProportionOf })
type Index<T = void> = number & { _IndexBrand: "Index" } & (T extends void ? {} : { _IndexOfBrand: T })
type Count<T = void> = number & { _CountBrand: "Count" } & (T extends void ? {} : { _CountOfBrand: T })
type Sum<T = void> = number & { _SumBrand: "Sum" } & (T extends void ? {} : { _SumOfBrand: T })
type Id<T = void> = number & { _IdBrand: "Id" } & (T extends void ? {} : { _IdOfBrand: T })

type Ratio = [Numerator, Denominator]

type Combination<T> = T[] & { _CombinationBrand: "Combination" }
type Combinations<T> = Combination<T>[] & { _CombinationsBrand: "Combinations" }

type DistributionBin<T> = Combination<T> & { _DistributionBinBrand: "DistributionBin" }
type Distribution<T> = DistributionBin<T>[] & { _DistributionBrand: "Distribution" }

enum Justification {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center",
}

type JustificationOption = Justification | (Justification | undefined)[]

type EnumHash<Enum extends string, ValueType> = { [key in Enum]: ValueType }

export {
    Cents,
    Ratio,
    Numerator,
    Denominator,
    Prime,
    Justification,
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
    Proportion,
    Index,
    Count,
    Sum,
    JustificationOption,
    EnumHash,
    Id,
}

type Cents = number & { _CentsBrand: "Cents" }
type Numerator = number & { _NumeratorBrand: "Numerator" }
type Denominator = number & { _DenominatorBrand: "Denominator" }
type Prime = number & { _PrimeBrand: "Prime" }
type Proportion = number & { _ProportionBrand: "Proportion" }

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
}

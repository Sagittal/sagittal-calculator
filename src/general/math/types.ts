type Numerator = number & { _NumeratorBrand: "Numerator" }
type Denominator = number & { _DenominatorBrand: "Denominator" }
type Ratio = [Numerator, Denominator]

type Combination<T> = T[] & { _CombinationBrand: "Combination" }
type Combinations<T> = Array<Combination<T>> & { _CombinationsBrand: "Combinations" }

type DistributionBin<T> = Combination<T> & { _DistributionBinBrand: "DistributionBin" }
type Distribution<T> = Array<DistributionBin<T>> & { _DistributionBrand: "Distribution" }

export {
    Ratio,
    Numerator,
    Denominator,
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
}

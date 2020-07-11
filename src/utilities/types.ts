type Cents = number & { _CentsBrand: "Cents" }
type Numerator = number & { _NumeratorBrand: "Numerator" }
type Denominator = number & { _DenominatorBrand: "Denominator" }
type Prime = number & { _PrimeBrand: "Prime" }
type Proportion = number & { _ProportionBrand: "Proportion" }

type Ratio = [Numerator, Denominator]

// todo: need a better name for SubmetricCombination since it has a Combination<Submetric> inside it.
// todo: and then the directory should be called submetricCombinations not anymore
// todo: ok i cna't find the other todo i just added for renaming SubmetricCombination since it contains a Combination<Submetric> but perhaps its actually a Sample ?

type Combination<T> = T[] & { _CombinationBrand: "Combination" } // todo: the idea should be that for arrays where order doesn't matter you should use combination
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

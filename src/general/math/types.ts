type Combination<T> = T[] & {_CombinationBrand: boolean}
type Combinations<T> = Array<Combination<T>> & {_CombinationsBrand: boolean}

type DistributionBin<T> = Combination<T> & {_DistributionBinBrand: boolean}
type Distribution<T> = Array<DistributionBin<T>> & {_DistributionBrand: boolean}

// Numeric types where parameter is also numeric
type Exponent<T extends number = number> = number & {_ExponentBrand: boolean, _ExponentOfBrand: T}
type Base<T extends number = number> = number & {_BaseBrand: boolean, _BaseOfBrand: T}
type Power<T extends number = number> = number & {_PowerBrand: boolean, _PowerOfBrand: T}

// Qualities of numerics
type Abs<T extends number = number> = T & {_AbsBrand: boolean}
type Approx<T extends number = number> = T & {_ApproxBrand: boolean}

// Experimenting with not necessarily applying to numbers,
// Though it seems like plenty others of these might be flexible in that way too
type Max<T extends unknown = number> = T & {_MaxBrand: boolean}
type Min<T extends unknown = number> = T & {_MinBrand: boolean}

enum MeanType {
    ARITHMETIC = "arithmetic",
    GEOMETRIC = "geometric",
    HARMONIC = "harmonic",
}

type MeanTypeParameters = Partial<{
    of: unknown,
    meanType: MeanType,
}>

type Mean<T extends MeanTypeParameters = {}> =
    T["of"]
    & {_AverageBrand: boolean}
    & (T extends {of: unknown} ? {} : {_AvgOfBrand: T["of"]})
    & (T extends {meanType: MeanType.ARITHMETIC} ? {_MeanTypeBrand: MeanType.ARITHMETIC} : {})
    & (T extends {meanType: MeanType.GEOMETRIC} ? {_MeanTypeBrand: MeanType.GEOMETRIC} : {})
    & (T extends {meanType: MeanType.HARMONIC} ? {_MeanTypeBrand: MeanType.HARMONIC} : {})

type X = number & {_XBrand: boolean}
type Y = number & {_YBrand: boolean}
type Coordinate = X | Y
type Coordinates = [X, Y]
type Radians = number & {_RadiansBrand: boolean}
type Degrees = number & {_DegreesBrand: boolean}

export {
    Combination,
    Combinations,
    Distribution,
    DistributionBin,
    Exponent,
    Base,
    Power,
    Max,
    Min,
    Mean,
    MeanType,
    Abs,
    Coordinates,
    Radians,
    Degrees,
}

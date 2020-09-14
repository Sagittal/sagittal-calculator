import { Direction, Numeric, NumericTypeParameterEffectsBesidesInteger, NumericTypeParameters } from "../types"

type Numerator<T extends NumericTypeParameters = {}> = Numeric<T> & { _NumeratorBrand: "Numerator" }
type Denominator<T extends NumericTypeParameters = {}> = Numeric<T> & { _DenominatorBrand: "Denominator" }
type Ratio<T extends NumericTypeParameters = {}> =
    [Numerator<T>, Denominator<T>] & NumericTypeParameterEffectsBesidesInteger<T>

type UndirectedRatio<T extends NumericTypeParameters & { direction: Direction.SUPER } =
    { direction: Direction.SUPER }> = Ratio<T> & { _UndirectedRatioBrand: "UndirectedRatio" }

type PotentiallyNonintegerRatioParameter<T extends NumericTypeParameters> =
    [number & { _NumeratorBrand: "Numerator" }, number & { _DenominatorBrand: "Denominator" }]
    & NumericTypeParameterEffectsBesidesInteger<T>

enum FractionalPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type FractionalPart = Numerator | Denominator

export {
    Ratio,
    Numerator,
    Denominator,
    FractionalPartType,
    FractionalPart,
    UndirectedRatio,
    PotentiallyNonintegerRatioParameter,
}

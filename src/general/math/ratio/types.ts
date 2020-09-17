import { Direction, Numeric, NumericTypeParameterEffects, NumericTypeParameters } from "../types"

type Numerator<T extends NumericTypeParameters = {}> =
    Numeric<
        (T extends { irrational: true } ? {} : { integer: true }) &
        (T extends { rough: number } ? { rough: T["rough"] } : {}) &
        (T extends { smooth: number } ? { smooth: T["smooth"] } : {}) &
        (T extends { integer: true } ? { integer: true } : {})
    >
    & { _NumeratorBrand: "Numerator" }
type Denominator<T extends NumericTypeParameters = {}> =
    Numeric<
        (T extends { irrational: true } ? {} : { integer: true }) &
        (T extends { rough: number } ? { rough: T["rough"] } : {}) &
        (T extends { smooth: number } ? { smooth: T["smooth"] } : {}) &
        (T extends { integer: true } ? { integer: true } : {})
    >
    & { _DenominatorBrand: "Denominator" }
type Ratio<T extends NumericTypeParameters = {}> =
    [Numerator<T>, Denominator<T>] & NumericTypeParameterEffects<T>

type UndirectedRatio<T extends NumericTypeParameters & { direction: Direction.SUPER } =
    { direction: Direction.SUPER }> = Ratio<T> & { _UndirectedRatioBrand: "UndirectedRatio" }

type PotentiallyIrrationalRatioParameter<T extends NumericTypeParameters> =
    [number & { _NumeratorBrand: "Numerator" }, number & { _DenominatorBrand: "Denominator" }]
    & NumericTypeParameterEffects<T>

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
    PotentiallyIrrationalRatioParameter,
}

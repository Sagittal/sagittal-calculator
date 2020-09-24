import { Decimal, Direction, NumTypeParameterEffects, NumTypeParameters } from "../../types"
import { Monzo } from "../monzo"
import { RationalNumTypeParameters } from "../types"

type Numerator<T extends NumTypeParameters = {}> =
    Decimal<(T extends { potentiallyIrrational: true } ? {} : { integer: true }) &
        (T extends { rough: number } ? { rough: T["rough"] } : {}) &
        (T extends { smooth: number } ? { smooth: T["smooth"] } : {}) &
        (T extends { integer: true } ? { integer: true } : {})>
    & { _NumeratorBrand: boolean }
type Denominator<T extends NumTypeParameters = {}> =
    Decimal<(T extends { potentiallyIrrational: true } ? {} : { integer: true }) &
        (T extends { rough: number } ? { rough: T["rough"] } : {}) &
        (T extends { smooth: number } ? { smooth: T["smooth"] } : {}) &
        (T extends { integer: true } ? { integer: true } : {})>
    & { _DenominatorBrand: boolean }
type Ratio<T extends NumTypeParameters = {}> =
    [Numerator<T>, Denominator<T>] & NumTypeParameterEffects<T>

type UndirectedRatio<T extends NumTypeParameters & { direction: Direction.SUPER } =
    { direction: Direction.SUPER }> = Ratio<T> & { _UndirectedRatioBrand: boolean }

type RatioNotDefaultingToRational<T extends NumTypeParameters = {}> =
    [number & { _NumeratorBrand: boolean }, number & { _DenominatorBrand: boolean }]
    & NumTypeParameterEffects<T>

enum FractionalPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type FractionalPart<T extends NumTypeParameters = {}> = Numerator<T> | Denominator<T>

type RationalNumByRatio<T extends RationalNumTypeParameters = { potentiallyIrrational: false }> = {
    decimal?: Decimal<T>,
    monzo?: Monzo<T>,
    ratio: Ratio<T>,
}

export {
    Ratio,
    Numerator,
    Denominator,
    FractionalPartType,
    FractionalPart,
    UndirectedRatio,
    RatioNotDefaultingToRational,
    RationalNumByRatio,
}

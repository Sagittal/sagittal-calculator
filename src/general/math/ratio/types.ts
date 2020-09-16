import { Direction, Integer, Numeric, NumericTypeParameterEffects, NumericTypeParameters } from "../types"

type Numerator<T extends NumericTypeParameters = {}> =
    // TODO: okay this will probably suffice for now, but you'll want to extract it to "CoolThing" one level up
    //  and share it with what monzo puts on its terms
    //  but more interestingly you should consider for each other NumericTypeParameter
    //  what other things if true of the Ratio will also be true of the FractionalParts
    //  rough? yes, smooth? yes, integer? yes, irrational? not necessarily, direction? no
    //  and is it the same set of answers for Monzo?
    //  rough? no, smooth? no, integer? yes, irrational? not necessarily, direction? not necessarily
    (T extends { irrational: true } ? number : Integer)
    & { _NumeratorBrand: "Numerator" }
type Denominator<T extends NumericTypeParameters = {}> =
    (T extends { irrational: true } ? number : Integer)
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

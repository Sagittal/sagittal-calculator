import {Ed, Window} from "../general"

enum ScriptGroup {
    JI_NOTATION_BOUND_CLASS = "jiNotationBoundClass",
    JI_PITCH = "jiPitch",
    POPULAR_2_3_FREE_CLASSES = "popular23FreeClasses",
    POPULARITY_METRIC_LFC = "popularityMetricLfc",      // The "Large Function Collider" as Dave likes to call it
    COMPLEXITY_METRIC_LFC = "complexityMetricLfc",      // Another less involved LFC...
    JI_NOTATION_BADNESS = "jiNotationBadness",
    TMP = "tmp",
    SPEC = "spec",
}

type Parameter = number & {_ParameterValueBrand: boolean}

type DynamicParameterScope = Partial<{
    center: Parameter,
    ed: Ed<Parameter>,
    window: Window<Parameter>,
}>

type ParameterScope = Parameter | boolean | DynamicParameterScope

type ParameterScopes<T extends string = string> = Partial<Record<T, ParameterScope>>

type Score<T extends unknown = undefined> = number & {_ScoreBrand: boolean, _ScoreOf: T}

export {
    ScriptGroup,
    Parameter,
    DynamicParameterScope,
    ParameterScopes,
    ParameterScope,
    Score,
}

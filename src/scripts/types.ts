import {Ed, Window} from "../general"

enum ScriptGroup {
    JI_NOTATION_BOUND_CLASS = "jiNotationBoundClass",
    JI_PITCH = "jiPitch",
    POPULAR_2_3_FREE_CLASSES = "popular23FreeClasses",
    POPULARITY_METRIC_LFC = "popularityMetricLfc",      // The "Large Function Collider" as Dave likes to call it
    USEFULNESS_METRIC_LFC = "usefulnessMetricLfc",
    TMP = "tmp",
    SPEC = "spec",
}

type Parameter = number & {_ParameterValueBrand: boolean}

type DynamicParameterScope = Partial<{
    center: Parameter,
    ed: Ed<Parameter>,
    window: Window<Parameter>,
}>

export {
    ScriptGroup,
    Parameter,
    DynamicParameterScope,
}

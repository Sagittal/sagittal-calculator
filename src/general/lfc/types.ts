import {Ed, Window} from "../types"

type Parameter = number & {_ParameterValueBrand: boolean}

type DynamicParameterScope = Partial<{
    center: Parameter,
    ed: Ed<Parameter>,
    window: Window<Parameter>,
}>

type ParameterScope = Parameter | boolean | DynamicParameterScope

type ParameterScopes<T extends string = string> = Partial<Record<T, ParameterScope>>

// TODO: MISCELLANEOUS: should this be "Grade", per http://forum.sagittal.org/viewtopic.php?p=2754#p2754?
type Score<T extends unknown = undefined> = number & {_ScoreBrand: boolean, _ScoreOf: T}

export {
    Parameter,
    DynamicParameterScope,
    ParameterScopes,
    ParameterScope,
    Score,
}

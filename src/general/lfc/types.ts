import {Ed, Window} from "../types"

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
    Parameter,
    DynamicParameterScope,
    ParameterScopes,
    ParameterScope,
    Score,
}

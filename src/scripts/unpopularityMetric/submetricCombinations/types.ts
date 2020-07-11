import { DynamicParameter, Submetric, Parameter, SubmetricType } from "../types"
import { Point } from "../automator/types"

type ParameterPoint = number & { _ParameterPointBrand: "ParameterPoint" }

type SubmetricCombination = {
    submetrics: Submetric[],
    point: Point,
}

interface ComputeParameterPointIndicesParameters {
    dynamicParameters: DynamicParameter[],
    submetricPoint: SubmetricPoint,
    submetricIndex: number,
}

type SubmetricPoint = { [key in Parameter]?: ParameterPoint | boolean | SubmetricType }

export {
    ParameterPoint,
    SubmetricCombination,
    ComputeParameterPointIndicesParameters,
    SubmetricPoint,
}

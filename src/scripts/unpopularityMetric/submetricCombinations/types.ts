import { DynamicParameter, Submetric, Parameter, SubmetricType } from "../types"
import { Coordinate } from "../automator/types"

type ParameterPoint = number & { _ParameterPointBrand: "ParameterPoint" }

type SubmetricCombination = {
    submetrics: Submetric[],
    coordinate: Coordinate,
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

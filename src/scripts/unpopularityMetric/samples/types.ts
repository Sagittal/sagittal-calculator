import { DynamicParameter, Submetric, Parameter, SubmetricType } from "../types"
import { Combination } from "../../../utilities/types"

type Point = number[] & { _CoordinateBrand: "Coordinate" }

// todo: crap is this confusing that we have Point and this ParameterPoint? they are kind of the same but not exactly. should point actually be a SamplePoint? and this be a SampleCoordinate? but also consider w/r/t SubmetricPoint just below
type ParameterPoint = number & { _ParameterPointBrand: "ParameterPoint" }

type SubmetricPoint = { [key in Parameter]?: ParameterPoint | boolean | SubmetricType }

type Sample = {
    submetrics: Combination<Submetric>,
    point: Point,
}

interface ComputeParameterPointIndicesParameters {
    dynamicParameters: DynamicParameter[],
    submetricPoint: SubmetricPoint,
    submetricIndex: number,
}

export {
    ParameterPoint,
    Sample,
    ComputeParameterPointIndicesParameters,
    SubmetricPoint,
    Point,
}

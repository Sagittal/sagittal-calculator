import { Parameter, Submetric, SubmetricType } from "../../types"
import { Combination } from "../../../../utilities/types"

type Point = number[] & { _CoordinateBrand: "Coordinate" }

// todo: crap is this confusing that we have Point and this ParameterPoint?
//  they are kind of the same but not exactly.
//  should point actually be a SamplePoint?
//  and this be a SampleCoordinate?
//  but also consider w/r/t SubmetricPoint just below
//  well actually a coordinate is like a ParameterPointIndex yeah?
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

interface DynamicParameter {
    submetricIndex: number,
    parameter: Parameter,
    parameterPoints: ParameterPoint[],
    unit: number,
}

export {
    ParameterPoint,
    Sample,
    ComputeParameterPointIndicesParameters,
    SubmetricPoint,
    Point,
    DynamicParameter,
}

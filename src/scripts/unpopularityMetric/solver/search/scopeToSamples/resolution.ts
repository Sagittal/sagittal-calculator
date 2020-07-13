import { MAXIMUM_UNIT } from "./constants"
import { DynamicParameterValue } from "../../../types"
import { Resolution, Span } from "../../../../../utilities/types"
import { ComputeResolutionOptions } from "./types"

const computeResolution = (span: Span<DynamicParameterValue>, { maximumUnit = MAXIMUM_UNIT }: ComputeResolutionOptions = {}): Resolution<DynamicParameterValue> => {
    return Math.ceil(span / maximumUnit) as Resolution<DynamicParameterValue>
}

export {
    computeResolution,
}

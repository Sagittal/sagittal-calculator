import { Resolution, Span } from "../../../../../general"
import { ParameterValue } from "../../../types"
import { MAXIMUM_UNIT } from "./constants"
import { ComputeResolutionOptions } from "./types"

const computeResolution = (span: Span<ParameterValue>, { maximumUnit = MAXIMUM_UNIT }: ComputeResolutionOptions = {}): Resolution<ParameterValue> => {
    const resolution = Math.ceil(span / maximumUnit) as Resolution<ParameterValue>

    return resolution > 1 ? resolution : 2 as Resolution<ParameterValue>
}

export {
    computeResolution,
}

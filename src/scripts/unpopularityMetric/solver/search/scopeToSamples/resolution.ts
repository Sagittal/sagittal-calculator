import { MAXIMUM_PARAMETER_UNIT } from "./constants"
import { DynamicParameterValue } from "../../../types"
import { Resolution, Span } from "../../../../../utilities/types"

const computeResolution = (range: Span<DynamicParameterValue>): Resolution<DynamicParameterValue> => {
    return Math.ceil(range / MAXIMUM_PARAMETER_UNIT) as Resolution<DynamicParameterValue>
}

export {
    computeResolution,
}

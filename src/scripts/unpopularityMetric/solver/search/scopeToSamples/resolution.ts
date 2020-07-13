import { MAXIMUM_PARAMETER_UNIT } from "./constants"
import { DynamicParameterValue } from "../../../types"
import { Resolution, Span } from "../../../../../utilities/types"

const computeResolution = (span: Span<DynamicParameterValue>): Resolution<DynamicParameterValue> => {
    return Math.ceil(span / MAXIMUM_PARAMETER_UNIT) as Resolution<DynamicParameterValue>
}

export {
    computeResolution,
}

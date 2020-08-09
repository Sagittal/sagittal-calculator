import { Resolution, Span } from "../../../../general"
import { solverStatus } from "../../globals"
import { ParameterValue } from "../../sumOfSquares"
import { MAXIMUM_UNIT } from "./constants"

const computeResolution = (span: Span<ParameterValue>): Resolution<ParameterValue> => {
    const maximumUnit = solverStatus.maximumUnit || MAXIMUM_UNIT

    const resolution = Math.ceil(span / maximumUnit) as Resolution<ParameterValue>

    return resolution > 1 ? resolution : 2 as Resolution<ParameterValue>
}

export {
    computeResolution,
}

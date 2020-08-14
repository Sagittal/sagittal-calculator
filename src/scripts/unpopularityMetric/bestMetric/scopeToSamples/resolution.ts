import { Resolution, Span } from "../../../../general"
import { unpopularityMetricSettings } from "../../globals"
import { ParameterValue } from "../../sumOfSquares"

const computeResolution = (span: Span<ParameterValue>): Resolution<ParameterValue> => {
    const maximumUnit = unpopularityMetricSettings.maximumUnit

    const resolution = Math.ceil(span / maximumUnit) as Resolution<ParameterValue>

    return resolution > 1 ? resolution : 2 as Resolution<ParameterValue>
}

export {
    computeResolution,
}

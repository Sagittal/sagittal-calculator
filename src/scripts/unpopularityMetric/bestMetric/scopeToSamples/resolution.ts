import { Resolution, Span } from "../../../../general"
import { unpopularityMetricSettings } from "../../globals"
import { ParameterValue } from "../../sumOfSquares"

const computeResolution = (span: Span<ParameterValue>): Resolution<ParameterValue> => {
    const maxUnit = unpopularityMetricSettings.maxUnit

    const resolution = Math.ceil(span / maxUnit) as Resolution<ParameterValue>

    return resolution > 1 ? resolution : 2 as Resolution<ParameterValue>
}

export {
    computeResolution,
}

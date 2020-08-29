import { ceil, Resolution, Span } from "../../../../general"
import { lfcSettings } from "../../globals"
import { ParameterValue } from "../../sumOfSquares"

const computeResolution = (span: Span<ParameterValue>): Resolution<ParameterValue> => {
    const maxUnit = lfcSettings.maxUnit

    const resolution = ceil(span / maxUnit as Resolution<ParameterValue>)

    return resolution > 1 ? resolution : 2 as Resolution<ParameterValue>
}

export {
    computeResolution,
}

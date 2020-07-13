import { SampleRange, SampleResolution } from "./types"
import { MAXIMUM_PARAMETER_UNIT } from "./constants"

const computeResolution = (range: SampleRange): SampleResolution => {
    return Math.ceil(range / MAXIMUM_PARAMETER_UNIT) as SampleResolution
}

export {
    computeResolution,
}

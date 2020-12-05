import {ceil, Ed, Parameter, Window} from "@sagittal/general"
import {popularityMetricLfcScriptGroupSettings} from "../../globals"

const computeEqualDivision = (window: Window<{of: Parameter}>): Ed<{of: Parameter}> => {
    const maxUnit = popularityMetricLfcScriptGroupSettings.maxUnit

    const equalDivision = ceil(window / maxUnit as Ed<{of: Parameter}>)

    return equalDivision > 1 ?
        equalDivision as Ed<{of: Parameter}> :
        2 as Ed<{of: Parameter}>
}

export {
    computeEqualDivision,
}

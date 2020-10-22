import {ceil, Ed, Window} from "../../../../general"
import {popularityMetricLfcScriptGroupSettings} from "../../globals"
import {ParameterValue} from "../../sumOfSquares"

const computeEqualDivision = (window: Window<ParameterValue>): Ed<ParameterValue> => {
    const maxUnit = popularityMetricLfcScriptGroupSettings.maxUnit

    const equalDivision = ceil(window / maxUnit as Ed<ParameterValue>)

    return equalDivision > 1 ?
        equalDivision as Ed<ParameterValue> :
        2 as Ed<ParameterValue>
}

export {
    computeEqualDivision,
}

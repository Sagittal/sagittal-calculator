import { ceil, Ed, Window } from "../../../../general"
import { lfcScriptGroupSettings } from "../../globals"
import { ParameterValue } from "../../sumOfSquares"

const computeEqualDivision = (window: Window<ParameterValue>): Ed<ParameterValue> => {
    const maxUnit = lfcScriptGroupSettings.maxUnit

    const equalDivision = ceil(window / maxUnit as Ed<ParameterValue>)

    return equalDivision > 1 ? equalDivision : 2 as Ed<ParameterValue>
}

export {
    computeEqualDivision,
}

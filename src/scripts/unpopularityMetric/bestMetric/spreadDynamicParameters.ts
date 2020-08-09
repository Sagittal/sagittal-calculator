import { Parameter } from "../sumOfSquares"
import { Scope, SubmetricScope } from "./types"
import { PARAMETER_DYNAMISMS } from "../perfecter"

const computeSpreadDynamicParameters = (scope: Scope): Parameter[] | undefined => {
    const allBinsSubmetricScope: SubmetricScope = scope[ 0 ]

    const spreadParameters: Parameter[] = Object.keys(allBinsSubmetricScope) as Parameter[]

    const spreadDynamicParameters = spreadParameters.filter(spreadParameter => PARAMETER_DYNAMISMS[ spreadParameter ])

    return spreadDynamicParameters.length ? spreadDynamicParameters as Parameter[] : undefined
}

export {
    computeSpreadDynamicParameters,
}

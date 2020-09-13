import { Maybe } from "../../../general"
import { PARAMETER_DYNAMISMS } from "../perfecter"
import { Parameter } from "../sumOfSquares"
import { Scope, SubmetricScope } from "./types"

const computeSpreadDynamicParameters = (scope: Scope): Maybe<Parameter[]> => {
    const allBinsSubmetricScope: SubmetricScope = scope[ 0 ]

    const spreadParameters: Parameter[] = Object.keys(allBinsSubmetricScope) as Parameter[]

    const spreadDynamicParameters = spreadParameters.filter((spreadParameter: Parameter): boolean => {
        return PARAMETER_DYNAMISMS[ spreadParameter ]
    })

    return spreadDynamicParameters.length ? spreadDynamicParameters as Parameter[] : undefined
}

export {
    computeSpreadDynamicParameters,
}

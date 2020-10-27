import {Maybe} from "../../../general"
import {PARAMETER_DYNAMISMS} from "../perfecter"
import {PopularityParameterId} from "../sumOfSquares"
import {Scope, SubmetricScope} from "./types"

const computeSpreadDynamicParameters = (scope: Scope): Maybe<PopularityParameterId[]> => {
    const allBinsSubmetricScope: SubmetricScope = scope[0]

    const spreadParameters: PopularityParameterId[] = Object.keys(allBinsSubmetricScope) as PopularityParameterId[]

    const spreadDynamicParameters = spreadParameters.filter((spreadParameter: PopularityParameterId): boolean => {
        return PARAMETER_DYNAMISMS[spreadParameter]
    })

    return spreadDynamicParameters.length ? spreadDynamicParameters as PopularityParameterId[] : undefined
}

export {
    computeSpreadDynamicParameters,
}

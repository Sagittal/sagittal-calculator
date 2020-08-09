import { Parameter } from "../sumOfSquares"
import { Scope, SubmetricScope } from "./types"

const computeSpreadParameters = (scope: Scope): Parameter[] | undefined => {
    const allBinsSubmetricScope: SubmetricScope = scope[ 0 ]

    const spreadParameters = Object.keys(allBinsSubmetricScope)

    return spreadParameters.length ? spreadParameters as Parameter[] : undefined
}

export {
    computeSpreadParameters,
}

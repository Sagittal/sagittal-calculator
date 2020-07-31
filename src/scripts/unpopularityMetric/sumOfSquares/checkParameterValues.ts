import { Parameter, Submetric } from "../types"
import { isNumber } from "../../../general"

const checkSubmetricsForInvalidParameterValueCombinations = (submetrics: Submetric[]) => {
    submetrics.forEach((submetric: Submetric) => {
        const {
            [ Parameter.A ]: a,
            [ Parameter.J ]: j,
            [ Parameter.K ]: k,
            [ Parameter.WEIGHT ]: weight,
        } = submetric

        if (a === 1 && submetric[ Parameter.A_IS_BASE ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has a of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(a) && a < 0 && submetric[ Parameter.A_IS_BASE ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has a of negative base and will compute undefined antivotes.`)
        }
        if (j === 1 && submetric[ Parameter.J_IS_BASE ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has j of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(j) && j < 0 && submetric[ Parameter.J_IS_BASE ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has j of negative base and will compute undefined antivotes.`)
        }
        if (k === 1 && submetric[ Parameter.K_IS_BASE ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has k of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(k) && k < 0 && submetric[ Parameter.K_IS_BASE ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has k of negative base and will compute undefined antivotes.`)
        }
        if (weight === 1 && submetric[ Parameter.WEIGHT_IS_BASE ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has weight of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(weight) && weight < 0 && submetric[ Parameter.WEIGHT_IS_BASE ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has weight of negative base and will compute undefined antivotes.`)
        }
    })
}

export {
    checkSubmetricsForInvalidParameterValueCombinations,
}


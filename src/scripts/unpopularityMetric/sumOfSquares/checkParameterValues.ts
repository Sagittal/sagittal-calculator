import { isNumber } from "../../../general"
import { Parameter, Submetric } from "../types"

const checkSubmetricsForInvalidParameterValueCombinations = (submetrics: Submetric[]) => {
    submetrics.forEach((submetric: Submetric) => {
        const {
            [ Parameter.A_AS_BASE ]: aAsBase,
            [ Parameter.J_AS_BASE ]: jAsBase,
            [ Parameter.K_AS_BASE ]: kAsBase,
            [ Parameter.WEIGHT_AS_BASE ]: weightAsBase,
        } = submetric

        if (aAsBase === 1) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has a of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(aAsBase) && aAsBase < 0) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has a of negative base and will compute undefined antivotes.`)
        }
        if (jAsBase === 1) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has j of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(jAsBase) && jAsBase < 0) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has j of negative base and will compute undefined antivotes.`)
        }
        if (kAsBase === 1) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has k of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(kAsBase) && kAsBase < 0) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has k of negative base and will compute undefined antivotes.`)
        }
        if (weightAsBase === 1) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has weight of base 1 and will compute undefined antivotes.`)
        }
        if (isNumber(weightAsBase) && weightAsBase < 0) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has weight of negative base and will compute undefined antivotes.`)
        }
    })
}

export {
    checkSubmetricsForInvalidParameterValueCombinations,
}


import { Parameter, Submetric } from "../types"

const checkSubmetricsForInvalidParameterCombinations = (submetrics: Submetric[]) => {
    submetrics.forEach((submetric: Submetric) => {
        const {
            [ Parameter.A ]: a,
        } = submetric

        if (!submetric[ Parameter.SUM ] && !submetric[ Parameter.COUNT ] && !submetric[ Parameter.MAX ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has no provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[ Parameter.SUM ] && submetric[ Parameter.COUNT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[ Parameter.SUM ] && submetric[ Parameter.MAX ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[ Parameter.COUNT ] && submetric[ Parameter.MAX ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} has more than one provided operation parameter (sum, count, or max); exactly one of these is required.`)
        }
        if (submetric[ Parameter.A_IS_BASE ] && submetric[ Parameter.A_IS_EXPONENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify a to be both an exponent and a base.`)
        }
        if (submetric[ Parameter.J_IS_BASE ] && submetric[ Parameter.J_IS_EXPONENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify j to be both an exponent and a base.`)
        }
        if (submetric[ Parameter.K_IS_BASE ] && submetric[ Parameter.K_IS_EXPONENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify k to be both an exponent and a base.`)
        }
        if (submetric[ Parameter.WEIGHT_IS_BASE ] && submetric[ Parameter.WEIGHT_IS_EXPONENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify weight to be both an exponent and a base.`)
        }
        if (submetric[ Parameter.J ] && submetric[ Parameter.K ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify both j and k.`)
        }
    })
}

export {
    checkSubmetricsForInvalidParameterCombinations,
}

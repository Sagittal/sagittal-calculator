import { Parameter, Submetric } from "./types"
import { isUndefined } from "../../../general"

const checkSubmetricsForInvalidParameterCombinations = (submetrics: Submetric[]) => {
    submetrics.forEach((submetric: Submetric) => {
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

        if (!isUndefined(submetric[ Parameter.A_AS_BASE ]) && !isUndefined(submetric[ Parameter.A_AS_EXPONENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify a to be both an exponent and a base.`)
        }
        if (!isUndefined(submetric[ Parameter.J_AS_BASE ]) && !isUndefined(submetric[ Parameter.J_AS_EXPONENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify j to be both an exponent and a base.`)
        }
        if (!isUndefined(submetric[ Parameter.K_AS_BASE ]) && !isUndefined(submetric[ Parameter.K_AS_EXPONENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify k to be both an exponent and a base.`)
        }
        if (!isUndefined(submetric[ Parameter.WEIGHT_AS_BASE ]) && !isUndefined(submetric[ Parameter.WEIGHT_AS_EXPONENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify weight to be both an exponent and a base.`)
        }

        if (!isUndefined(submetric[ Parameter.A_AS_EXPONENT ]) && !isUndefined(submetric[ Parameter.A_AS_COEFFICIENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify a to be both a coefficient and an exponent.`)
        }
        if (!isUndefined(submetric[ Parameter.J_AS_EXPONENT ]) && !isUndefined(submetric[ Parameter.J_AS_COEFFICIENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify j to be both a coefficient and an exponent.`)
        }
        if (!isUndefined(submetric[ Parameter.K_AS_EXPONENT ]) && !isUndefined(submetric[ Parameter.K_AS_COEFFICIENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify k to be both a coefficient and an exponent.`)
        }
        if (!isUndefined(submetric[ Parameter.WEIGHT_AS_EXPONENT ]) && !isUndefined(submetric[ Parameter.WEIGHT_AS_COEFFICIENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify weight to be both a coefficient and an exponent.`)
        }

        if (!isUndefined(submetric[ Parameter.J_AS_COEFFICIENT ]) && !isUndefined(submetric[ Parameter.K_AS_COEFFICIENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify both j and k of the same type (coefficient).`)
        }

        if (!isUndefined(submetric[ Parameter.B ]) && isUndefined(submetric[ Parameter.W ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify b without w.`)
        }
        if (!isUndefined(submetric[ Parameter.U ]) && isUndefined(submetric[ Parameter.X ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify u without x.`)
        }
        if (!isUndefined(submetric[ Parameter.V ]) && isUndefined(submetric[ Parameter.Y ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify v without y.`)
        }
    })
}

export {
    checkSubmetricsForInvalidParameterCombinations,
}

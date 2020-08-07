import { Parameter, Submetric } from "./types"
import { isUndefined } from "../../../general"

const checkSubmetricsForInvalidParameterCombinations = (submetrics: Submetric[]) => {
    submetrics.forEach((submetric: Submetric) => {
        // non-one operation parameter count
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

        // canceling-out bases
        if (!isUndefined(submetric[ Parameter.A_AS_LOGARITHM_BASE ]) && !isUndefined(submetric[ Parameter.A_AS_POWER_BASE ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify a to be both a logarithm base and a power base.`)
        }
        if (!isUndefined(submetric[ Parameter.J_AS_LOGARITHM_BASE ]) && !isUndefined(submetric[ Parameter.J_AS_POWER_BASE ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify j to be both a logarithm base and a power base.`)
        }
        if (!isUndefined(submetric[ Parameter.K_AS_LOGARITHM_BASE ]) && !isUndefined(submetric[ Parameter.K_AS_POWER_BASE ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify k to be both a logarithm base and a power base.`)
        }
        if (!isUndefined(submetric[ Parameter.WEIGHT_AS_LOGARITHM_BASE ]) && !isUndefined(submetric[ Parameter.WEIGHT_AS_POWER_BASE ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify weight to be both a logarithm base and a power base.`)
        }

        // j and k both as coefficients
        if (!isUndefined(submetric[ Parameter.J_AS_COEFFICIENT ]) && !isUndefined(submetric[ Parameter.K_AS_COEFFICIENT ])) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify both j and k of the same type (coefficient).`)
        }

        // denominator-only parameters without the non-denominator-only equivalents
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
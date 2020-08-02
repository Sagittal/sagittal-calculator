import { Parameter, Submetric } from "./types"

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

        if (submetric[ Parameter.A_AS_BASE ] && submetric[ Parameter.A_AS_EXPONENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify a to be both an exponent and a base.`)
        }
        if (submetric[ Parameter.J_AS_BASE ] && submetric[ Parameter.J_AS_EXPONENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify j to be both an exponent and a base.`)
        }
        if (submetric[ Parameter.K_AS_BASE ] && submetric[ Parameter.K_AS_EXPONENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify k to be both an exponent and a base.`)
        }
        if (submetric[ Parameter.WEIGHT_AS_BASE ] && submetric[ Parameter.WEIGHT_AS_EXPONENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify weight to be both an exponent and a base.`)
        }

        if (submetric[ Parameter.A_AS_BASE ] && submetric[ Parameter.A_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify a to be both a coefficient and a base.`)
        }
        if (submetric[ Parameter.J_AS_BASE ] && submetric[ Parameter.J_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify j to be both a coefficient and a base.`)
        }
        if (submetric[ Parameter.K_AS_BASE ] && submetric[ Parameter.K_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify k to be both a coefficient and a base.`)
        }
        if (submetric[ Parameter.WEIGHT_AS_BASE ] && submetric[ Parameter.WEIGHT_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify weight to be both a coefficient and a base.`)
        }

        if (submetric[ Parameter.A_AS_EXPONENT ] && submetric[ Parameter.A_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify a to be both a coefficient and an exponent.`)
        }
        if (submetric[ Parameter.J_AS_EXPONENT ] && submetric[ Parameter.J_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify j to be both a coefficient and an exponent.`)
        }
        if (submetric[ Parameter.K_AS_EXPONENT ] && submetric[ Parameter.K_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify k to be both a coefficient and an exponent.`)
        }
        if (submetric[ Parameter.WEIGHT_AS_EXPONENT ] && submetric[ Parameter.WEIGHT_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify weight to be both a coefficient and an exponent.`)
        }

        if (submetric[ Parameter.J_AS_COEFFICIENT ] && submetric[ Parameter.K_AS_COEFFICIENT ]) {
            throw new Error(`Submetric ${JSON.stringify(submetric)} cannot specify both j and k of the same type (coefficient).`)
        }
    })
}

export {
    checkSubmetricsForInvalidParameterCombinations,
}

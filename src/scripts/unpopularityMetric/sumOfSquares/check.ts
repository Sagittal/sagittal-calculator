import { isNumber } from "../../../general"
import { Parameter, Submetric } from "../types"

const checkSubmetricsForInvalidParameterValueCombinations = (submetrics: Submetric[]) => {
    submetrics.forEach((submetric: Submetric) => {
        const {
            [ Parameter.A ]: a,
        } = submetric

        if (a === 1 && submetric[ Parameter.A_IS_BASE ]) {
            throw new Error("Submetric has base 1 and will compute undefined antivotes.")
        }
        if (isNumber(a) && a < 0 && submetric[ Parameter.A_IS_BASE ]) {
            throw new Error("Submetric has negative base and will compute undefined antivotes.")
        }
        if (!submetric[ Parameter.SUM ] && !submetric[ Parameter.COUNT ] && !submetric[ Parameter.MAX ]) {
            throw new Error("Submetric has no provided operation parameter (sum, count, or max); exactly one of these is required.")
        }
        if (submetric[ Parameter.SUM ] && submetric[ Parameter.COUNT ]) {
            throw new Error("Submetric has more than one provided operation parameter (sum, count, or max); exactly one of these is required.")
        }
        if (submetric[ Parameter.SUM ] && submetric[ Parameter.MAX ]) {
            throw new Error("Submetric has more than one provided operation parameter (sum, count, or max); exactly one of these is required.")
        }
        if (submetric[ Parameter.COUNT ] && submetric[ Parameter.MAX ]) {
            throw new Error("Submetric has more than one provided operation parameter (sum, count, or max); exactly one of these is required.")
        }
        if (submetric[ Parameter.A_IS_BASE ] && submetric[ Parameter.A_IS_EXPONENT ]) {
            throw new Error("Submetric cannot specify a to be both an exponent and a base.")
        }
        if (submetric[ Parameter.J_IS_BASE ] && submetric[ Parameter.J_IS_EXPONENT ]) {
            throw new Error("Submetric cannot specify j to be both an exponent and a base.")
        }
        if (submetric[ Parameter.K_IS_BASE ] && submetric[ Parameter.K_IS_EXPONENT ]) {
            throw new Error("Submetric cannot specify k to be both an exponent and a base.")
        }
        if (submetric[ Parameter.WEIGHT_IS_BASE ] && submetric[ Parameter.WEIGHT_IS_EXPONENT ]) {
            throw new Error("Submetric cannot specify weight to be both an exponent and a base.")
        }
        if (submetric[ Parameter.J ] && submetric[ Parameter.K ]) {
            throw new Error("Submetric cannot specify both j and k.")
        }
    })
}

export {
    checkSubmetricsForInvalidParameterValueCombinations,
}

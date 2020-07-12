import { Parameter, Submetric } from "../types"
import { isNumber } from "../../../utilities/typeGuards"

const checkSubmetricsForIssues = (submetrics: Submetric[]) => {
    submetrics.forEach((submetric: Submetric) => {
        const {
            [ Parameter.A ]: a,
        } = submetric

        if (a === 1 && submetric[ Parameter.A_IS_BASE ]) {
            throw new Error("Submetric has base 1 and will calculate undefined antivotes.")
        }
        if (isNumber(a) && a < 0 && submetric[ Parameter.A_IS_BASE ]) {
            throw new Error("Submetric has negative base and will calculate undefined antivotes.")
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
    checkSubmetricsForIssues,
}

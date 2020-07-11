import { Parameter, Submetric } from "../types"

const checkSubmetricsForIssues = (submetrics: Submetric[]) => {
    submetrics.forEach((submetric: Submetric) => {
        if (submetric[ Parameter.A ] === 1 && submetric[ Parameter.A_IS_BASE ]) {
            throw new Error("Submetric has base 1 and will calculate undefined antivotes.")
        };
        if ((submetric[ Parameter.A ] as number) < 0 && submetric[ Parameter.A_IS_BASE ]) {
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

    // gotta check combos of submetrics out here like this
    // [{"submetricType":"soapf"},{"submetricType":"soapfar","w":{"center":0,"range":12,"count":2},"a":{"center":2,"range":4,"count":2}}]
    // [{"submetricType":"gpf","j":{"center":1,"range":2,"count":2}},{"submetricType":"soapfar","a":{"center":2,"range":4,"count":2}}]
}

export {
    checkSubmetricsForIssues,
}

import { Parameter } from "../../types"
import { SubmetricScope } from "../types"

const computeIsValidSubmetricScope = (submetricScope: SubmetricScope): boolean => {
    if (!submetricScope[ Parameter.SUM ] && !submetricScope[ Parameter.COUNT ] && !submetricScope[ Parameter.MAX ]) {
        return false
    }
    if (submetricScope[ Parameter.SUM ] && submetricScope[ Parameter.COUNT ]) {
        return false
    }
    if (submetricScope[ Parameter.SUM ] && submetricScope[ Parameter.MAX ]) {
        return false
    }
    if (submetricScope[ Parameter.COUNT ] && submetricScope[ Parameter.MAX ]) {
        return false
    }
    if (submetricScope[ Parameter.A_IS_BASE ] && submetricScope[ Parameter.A_IS_EXPONENT ]) {
        return false
    }
    if (submetricScope[ Parameter.J_IS_BASE ] && submetricScope[ Parameter.J_IS_EXPONENT ]) {
        return false
    }
    if (submetricScope[ Parameter.K_IS_BASE ] && submetricScope[ Parameter.K_IS_EXPONENT ]) {
        return false
    }
    if (submetricScope[ Parameter.WEIGHT_IS_BASE ] && submetricScope[ Parameter.WEIGHT_IS_EXPONENT ]) {
        return false
    }
    if (submetricScope[ Parameter.J ] && submetricScope[ Parameter.K ]) {
        return false
    }

    return true
}

export {
    computeIsValidSubmetricScope,
}

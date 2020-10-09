import { computeQuotientFromMonzo } from "../../../math"
import { Name } from "../../../types"
import { TWO_3_FREE_CLASS_SIGN } from "./constants"
import { Two3FreeClass } from "./types"

const compute23FreeClassName = (two3FreeClass: Two3FreeClass): Name<Two3FreeClass> => {
    const [numerator, denominator] = computeQuotientFromMonzo(
        two3FreeClass.monzo,
        { disableErrorBecauseExactValueNotRequired: true },
    )

    return `${numerator}/${denominator}${TWO_3_FREE_CLASS_SIGN}` as Name<Two3FreeClass>
}

export {
    compute23FreeClassName,
}

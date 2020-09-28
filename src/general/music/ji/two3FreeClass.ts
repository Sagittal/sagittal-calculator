import { isUndefined } from "../../code"
import {
    computeDecimalFromQuotient,
    computeRationalQuotientFromRatio,
    computeRationalQuotientFromRationalDecimal,
    computeRoughRationalMonzo,
    computeRoughRationalQuotient,
    computeSuperMonzo,
    computeSuperQuotient,
    FIVE_ROUGHNESS,
    isIntegerDecimal,
    NumTypeParameters,
    Ratio,
} from "../../math"
import { Name } from "../../types"
import { Two3FreeClass } from "./types"

const compute23FreeClass = <T extends NumTypeParameters>(
    { monzo, quotient, decimal }: Ratio<T>,
): Two3FreeClass<T> => {
    const two3FreeClass = {} as Two3FreeClass

    if (!isUndefined(monzo)) {
        const two3FreeMonzo = computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS)
        two3FreeClass.monzo = computeSuperMonzo(two3FreeMonzo)
    }

    if (!isUndefined(quotient)) {
        const two3FreeQuotient = computeRoughRationalQuotient(quotient, FIVE_ROUGHNESS)
        two3FreeClass.quotient = computeSuperQuotient(two3FreeQuotient)
    }

    if (!isUndefined(decimal)) {
        const quotient = computeRationalQuotientFromRationalDecimal(decimal)
        const two3FreeQuotient = computeRoughRationalQuotient(quotient, FIVE_ROUGHNESS)
        const super23FreeQuotient = computeSuperQuotient(two3FreeQuotient)
        const super23FreeDecimal = computeDecimalFromQuotient(super23FreeQuotient)

        if (!isIntegerDecimal(super23FreeDecimal)) {
            throw new Error("Cannot safely represent a 2,3-free class (or JI in general) as a decimal which is not an integer.")
        }
        two3FreeClass.decimal = super23FreeDecimal
    }

    return two3FreeClass as Two3FreeClass<T>
}

const compute23FreeClassName = (two3FreeClass: Two3FreeClass): Name<Two3FreeClass> => {
    const [numerator, denominator] = computeRationalQuotientFromRatio(
        two3FreeClass,
        { disableErrorBecauseExactValueNotRequired: true },
    )

    return `${numerator}/${denominator}` as Name<Two3FreeClass>
}

export {
    compute23FreeClass,
    compute23FreeClassName,
}

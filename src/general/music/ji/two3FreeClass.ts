import { isUndefined } from "../../code"
import { Formatted, Table, TableFormat } from "../../io"
import {
    computeDecimalFromQuotient,
    computeRationalQuotientFromRational,
    computeRationalQuotientFromRationalDecimal,
    computeRoughRationalMonzo,
    computeRoughRationalQuotient,
    computeSuperMonzo,
    computeSuperQuotient,
    FIVE_ROUGHNESS,
    isIntegerDecimal,
    NumericProperties,
    Rational,
} from "../../math"
import { Name } from "../../types"
import { TWO_3_FREE_CLASS_SIGN } from "./constants"
import { Two3FreeClass } from "./types"

const compute23FreeClass = <T extends NumericProperties>(
    { monzo, quotient, decimal }: Rational<T>,
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
    const [numerator, denominator] = computeRationalQuotientFromRational(
        two3FreeClass,
        { disableErrorBecauseExactValueNotRequired: true },
    )

    return `${numerator}/${denominator}${TWO_3_FREE_CLASS_SIGN}` as Name<Two3FreeClass>
}

const format23FreeClass = (
    two3FreeClass: Two3FreeClass,
    { tableFormat }: { tableFormat?: TableFormat },
): Formatted<Two3FreeClass> => {
    const [numerator, denominator] = computeRationalQuotientFromRational(
        two3FreeClass,
        { disableErrorBecauseExactValueNotRequired: true },
    )
    
    return tableFormat === TableFormat.FORUM ?
        `[latex]\\frac{${numerator}}{${denominator}}_{\\scriptsize{(2,3)}}[/latex]` as Formatted<Two3FreeClass> :
        compute23FreeClassName(two3FreeClass) as string as Formatted<Two3FreeClass>
}

export {
    compute23FreeClass,
    compute23FreeClassName,
    format23FreeClass,
}

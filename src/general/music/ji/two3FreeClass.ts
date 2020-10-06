import { Formatted, TableFormat } from "../../io"
import {
    computeQuotientFromMonzo,
    computeRoughRationalMonzo,
    computeSuperMonzo,
    FIVE_ROUGHNESS,
    NumericProperties,
} from "../../math"
import { Name } from "../../types"
import { Pitch } from "../pitch"
import { TWO_3_FREE_CLASS_SIGN } from "./constants"
import { Two3FreeClass } from "./types"

const compute23FreeClass = <T extends NumericProperties>({ monzo }: Pitch<T & { rational: true }>): Two3FreeClass => {
    const two3FreeClass = {} as Two3FreeClass

    const two3FreeMonzo = computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS)
    two3FreeClass.monzo = computeSuperMonzo(two3FreeMonzo)

    return two3FreeClass as Two3FreeClass
}

const compute23FreeClassName = (two3FreeClass: Two3FreeClass): Name<Two3FreeClass> => {
    const [numerator, denominator] = computeQuotientFromMonzo(
        two3FreeClass.monzo,
        { disableErrorBecauseExactValueNotRequired: true },
    )

    return `${numerator}/${denominator}${TWO_3_FREE_CLASS_SIGN}` as Name<Two3FreeClass>
}

const format23FreeClass = (
    two3FreeClass: Two3FreeClass,
    { tableFormat }: { tableFormat?: TableFormat },
): Formatted<Two3FreeClass> => {
    const [numerator, denominator] = computeQuotientFromMonzo(
        two3FreeClass.monzo,
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

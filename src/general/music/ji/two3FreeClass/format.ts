import { Formatted, TableFormat } from "../../../io"
import { computeQuotientFromMonzo } from "../../../math"
import { compute23FreeClassName } from "./name"
import { Two3FreeClass } from "./types"

const format23FreeClass = (
    two3FreeClass: Two3FreeClass,
    { tableFormat }: { tableFormat?: TableFormat },
): Formatted<Two3FreeClass> => {
    const [numerator, denominator] = computeQuotientFromMonzo(
        two3FreeClass.monzo,
        { disableErrorBecauseExactValueNotRequired: true },
    )

    return tableFormat === TableFormat.FORUM ?
        `[/pre][latex]\\frac{${numerator}}{${denominator}}_{\\scriptsize{(2,3)}}[/latex][pre]` as
            Formatted<Two3FreeClass> :
        compute23FreeClassName(two3FreeClass) as string as Formatted<Two3FreeClass>
}

export {
    format23FreeClass,
}

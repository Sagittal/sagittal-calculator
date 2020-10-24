import {Formatted, ioSettings, TableFormat} from "../../../io"
import {computeQuotientFromMonzo} from "../../../math"
import {compute23FreeClassName} from "./name"
import {Two3FreeClass} from "./types"

// TODO: 2,3-FREE CLASS FORMAT UPDATE
//  Update two three free ratio format to use {} etc. per http://forum.sagittal.org/viewtopic.php?p=2556#p2556
//  Wait until achieving total resolution on the conversation though
const format23FreeClass = (two3FreeClass: Two3FreeClass): Formatted<Two3FreeClass> => {
    const [numerator, denominator] = computeQuotientFromMonzo(
        two3FreeClass.monzo,
        {disableErrorBecauseExactValueNotRequired: true},
    )

    return ioSettings.tableFormat === TableFormat.FORUM ?
        `[/pre][latex]\\frac{${numerator}}{${denominator}}_{\\scriptsize{(2,3)}}[/latex][pre]` as
            Formatted<Two3FreeClass> :
        compute23FreeClassName(two3FreeClass) as string as Formatted<Two3FreeClass>
}

export {
    format23FreeClass,
}

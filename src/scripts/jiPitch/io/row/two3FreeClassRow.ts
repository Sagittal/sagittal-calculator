import {formatDecimal, formatIntegerDecimal, Formatted, Row} from "@sagittal/general"
import {Two3FreeClassAnalysis} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../globals"
import {Two3FreeClassField} from "../../types"
import {formatSplit23FreeClass} from "../splitMonzoAndQuotient"

const compute23FreeClassRow = (
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
): Row<{of: Two3FreeClassAnalysis}> => {
    const {two3FreeClass, two3FreePrimeLimit, two3FreeCopfr, two3FreeSopfr, n2d3p9} = two3FreeClassAnalysis

    const row = [] as unknown[] as Row<{of: Two3FreeClassAnalysis}>
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.TWO_3_FREE_PRIME_LIMIT)) {
        row.push(
            formatIntegerDecimal(two3FreePrimeLimit, {align: true}) as Formatted as Formatted<Two3FreeClassAnalysis>,
        )
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.TWO_3_FREE_CLASS_NAME)) {
        row.push(...formatSplit23FreeClass(two3FreeClass))
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.TWO_3_FREE_COPFR)) {
        row.push(formatIntegerDecimal(two3FreeCopfr, {align: true}) as Formatted as Formatted<Two3FreeClassAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.TWO_3_FREE_SOPFR)) {
        row.push(formatIntegerDecimal(two3FreeSopfr, {align: true}) as Formatted as Formatted<Two3FreeClassAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.N2D3P9)) {
        row.push(formatDecimal(n2d3p9, {align: true}) as Formatted as Formatted<Two3FreeClassAnalysis>)
    }

    return row
}

export {
    compute23FreeClassRow,
}

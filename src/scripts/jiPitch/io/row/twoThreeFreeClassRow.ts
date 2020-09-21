import { format23FreeClass, formatInteger, formatNumber, Formatted, Row, TwoThreeFreeClass } from "../../../../general"
import { TwoThreeFreeClassAnalysis } from "../../../../sagittal"
import { jiPitchScriptGroupSettings } from "../../globals"
import { TwoThreeFreeClassField } from "../../types"

const compute23FreeClassRow = (
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis,
): Row<{ of: TwoThreeFreeClass }> => {
    const { twoThreeFreePrimeLimit, twoThreeFreeCopfr, twoThreeFreeSopfr, n2d3p9 } = twoThreeFreeClassAnalysis

    const rows = [] as unknown[] as Row<{ of: TwoThreeFreeClassAnalysis }>
    if (!jiPitchScriptGroupSettings.excludedFields.includes(TwoThreeFreeClassField.TWO_THREE_FREE_PRIME_LIMIT)) {
        rows.push(formatInteger(twoThreeFreePrimeLimit) as Formatted as Formatted<TwoThreeFreeClassAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(TwoThreeFreeClassField.TWO_THREE_FREE_CLASS_NAME)) {
        rows.push(format23FreeClass(twoThreeFreeClassAnalysis) as Formatted as Formatted<TwoThreeFreeClassAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(TwoThreeFreeClassField.TWO_THREE_FREE_COPFR)) {
        rows.push(formatInteger(twoThreeFreeCopfr) as Formatted as Formatted<TwoThreeFreeClassAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(TwoThreeFreeClassField.TWO_THREE_FREE_SOPFR)) {
        rows.push(formatInteger(twoThreeFreeSopfr) as Formatted as Formatted<TwoThreeFreeClassAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(TwoThreeFreeClassField.N2D3P9)) {
        rows.push(formatNumber(n2d3p9) as Formatted as Formatted<TwoThreeFreeClassAnalysis>)
    }
    
    return rows
}

export {
    compute23FreeClassRow,
}

import {
    format23FreeClass,
    formatDecimal,
    formatIntegerDecimal,
    Formatted,
    ioSettings,
    Row,
    Two3FreeClass,
} from "../../../../general"
import { Two3FreeClassAnalysis } from "../../../../sagittal"
import { jiPitchScriptGroupSettings } from "../../globals"
import { Two3FreeClassField } from "../../types"

const compute23FreeClassRow = (
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
): Row<{ of: Two3FreeClass }> => {
    const { two3FreePrimeLimit, two3FreeCopfr, two3FreeSopfr, n2d3p9 } = two3FreeClassAnalysis

    const rows = [] as unknown[] as Row<{ of: Two3FreeClassAnalysis }>
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.TWO_3_FREE_PRIME_LIMIT)) {
        rows.push(
            formatIntegerDecimal(
                two3FreePrimeLimit,
                { align: true },
            ) as Formatted as Formatted<Two3FreeClassAnalysis>,
        )
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.TWO_3_FREE_CLASS_NAME)) {
        rows.push(
            format23FreeClass(two3FreeClassAnalysis, ioSettings) as Formatted as Formatted<Two3FreeClassAnalysis>,
        )
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.TWO_3_FREE_COPFR)) {
        rows.push(
            formatIntegerDecimal(
                two3FreeCopfr,
                { align: true },
            ) as Formatted as Formatted<Two3FreeClassAnalysis>,
        )
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.TWO_3_FREE_SOPFR)) {
        rows.push(
            formatIntegerDecimal(
                two3FreeSopfr,
                { align: true },
            ) as Formatted as Formatted<Two3FreeClassAnalysis>,
        )
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(Two3FreeClassField.N2D3P9)) {
        rows.push(
            formatDecimal(n2d3p9, { align: true }) as Formatted as Formatted<Two3FreeClassAnalysis>,
        )
    }

    return rows
}

export {
    compute23FreeClassRow,
}

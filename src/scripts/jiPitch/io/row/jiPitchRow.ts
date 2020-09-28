import {
    formatCents,
    formatDecimal,
    formatIntegerDecimal,
    formatMonzo,
    formatQuotient,
    Formatted,
    Row,
} from "../../../../general"
import { JiPitchAnalysis } from "../../../../sagittal"
import { jiPitchScriptGroupSettings } from "../../globals"
import { JiPitchField } from "../../types"

const computeJiPitchRow = (jiPitchAnalysis: JiPitchAnalysis): Row<{ of: JiPitchAnalysis }> => {
    const { cents, monzo, quotient, apotomeSlope, aas, ate } = jiPitchAnalysis

    const rows = [] as unknown[] as Row<{ of: JiPitchAnalysis }>

    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.QUOTIENT)) {
        rows.push(formatQuotient(quotient) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.MONZO)) {
        rows.push(formatMonzo(monzo) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.CENTS)) {
        rows.push(formatCents(cents, { align: true }) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.APOTOME_SLOPE)) {
        rows.push(formatDecimal(apotomeSlope, { align: true }) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.AAS)) {
        rows.push(formatDecimal(aas, { align: true }) as Formatted as Formatted<JiPitchAnalysis>)
    }
    if (!jiPitchScriptGroupSettings.excludedFields.includes(JiPitchField.ATE)) {
        rows.push(formatIntegerDecimal(ate, { align: true }) as Formatted as Formatted<JiPitchAnalysis>)
    }

    return rows
}

export {
    computeJiPitchRow,
}

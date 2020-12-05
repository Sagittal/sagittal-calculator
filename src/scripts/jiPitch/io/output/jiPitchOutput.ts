import {
    BLANK,
    computeExampleElement,
    count,
    formatTable,
    Io,
    isEmpty,
    isUndefined,
    sumTexts,
    Table,
} from "@sagittal/general"
import {JiPitchAnalysis} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JI_PITCH_FIELD_TITLES} from "../fieldTitles"
import {computeJiPitchHeaderRows} from "../headerRows"
import {computeOrderedTableAndAlignment} from "../orderedFields"
import {computeJiPitchRow} from "../row"
import {computeMaxMonzoLength, computeSplitMonzoAndQuotientTableAlignment} from "../splitMonzoAndQuotient"
import {JI_PITCH_TABLE_TITLE} from "../tableTitles"

const computeJiPitchOutput = (
    jiPitchAnalysis: JiPitchAnalysis,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength([jiPitchAnalysis])
    const jiPitchHeaderRows = computeJiPitchHeaderRows(maxMonzoLength)
    const headerRowCount = count(jiPitchHeaderRows)
    let tableAlignment = computeSplitMonzoAndQuotientTableAlignment(jiPitchHeaderRows)

    let jiPitchTable: Table<JiPitchAnalysis> = [
        ...jiPitchHeaderRows,
        computeJiPitchRow(jiPitchAnalysis, maxMonzoLength),
    ]

    if (!isUndefined(jiPitchScriptGroupSettings.orderedFields)) {
        const {
            table: orderedJiPitchTable,
            tableAlignment: orderedTableAlignment,
        } = computeOrderedTableAndAlignment(
            {table: jiPitchTable, tableAlignment},
            {maxMonzoLength, fieldTitles: JI_PITCH_FIELD_TITLES},
        )
        jiPitchTable = orderedJiPitchTable
        tableAlignment = orderedTableAlignment
    }

    if (isEmpty(computeExampleElement(jiPitchTable))) return BLANK

    return sumTexts(
        JI_PITCH_TABLE_TITLE,
        formatTable(jiPitchTable, {headerRowCount, tableAlignment}),
    )
}

export {
    computeJiPitchOutput,
}

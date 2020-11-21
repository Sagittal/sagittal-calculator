import {count, formatTable, Io, isUndefined, sumTexts, Table} from "../../../../general"
import {JiPitchAnalysis} from "../../../../sagittal"
import {jiPitchScriptGroupSettings} from "../../globals"
import {JI_PITCH_FIELD_TITLES} from "../fieldTitles"
import {computeJiPitchHeaderRows} from "../headerRows"
import {computeOrderedTableAndJustification} from "../orderedFields"
import {computeJiPitchRow} from "../row"
import {computeMaxMonzoLength, computeMonzoAndQuotientJustification} from "../splitMonzoAndQuotient"
import {JI_PITCH_TABLE_TITLE} from "../tableTitles"

const computeJiPitchOutput = (
    jiPitchAnalysis: JiPitchAnalysis,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength([jiPitchAnalysis])
    const jiPitchHeaderRows = computeJiPitchHeaderRows(maxMonzoLength)
    const headerRowCount = count(jiPitchHeaderRows)
    let justification = computeMonzoAndQuotientJustification(jiPitchHeaderRows)

    let jiPitchTable: Table<JiPitchAnalysis> = [
        ...jiPitchHeaderRows,
        computeJiPitchRow(jiPitchAnalysis, maxMonzoLength),
    ]

    if (!isUndefined(jiPitchScriptGroupSettings.orderedFields)) {
        const {
            table: orderedJiPitchTable,
            justification: orderedJustification,
        } = computeOrderedTableAndJustification(
            {table: jiPitchTable, justification},
            {maxMonzoLength, fieldTitles: JI_PITCH_FIELD_TITLES},
        )
        jiPitchTable = orderedJiPitchTable
        justification = orderedJustification
    }

    return sumTexts(
        JI_PITCH_TABLE_TITLE,
        formatTable(jiPitchTable, {headerRowCount, justification}),
    )
}

export {
    computeJiPitchOutput,
}

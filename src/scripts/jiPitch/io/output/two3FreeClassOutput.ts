import {count, formatTable, Io, isUndefined, sumTexts, Table} from "../../../../general"
import {Two3FreeClassAnalysis} from "../../../../sagittal"
import {jiPitchScriptGroupSettings} from "../../globals"
import {TWO_3_FREE_CLASS_FIELD_TITLES} from "../fieldTitles"
import {compute23FreeClassHeaderRows} from "../headerRows"
import {computeOrderedTableAndJustification} from "../orderedFields"
import {compute23FreeClassRow} from "../row"
import {computeMonzoAndQuotientJustification} from "../splitMonzoAndQuotient"
import {TWO_3_FREE_CLASS_TABLE_TITLE} from "../tableTitles"

const compute23FreeClassOutput = (
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
): Io => {
    const two3FreeClassHeaderRows = compute23FreeClassHeaderRows()
    const headerRowCount = count(two3FreeClassHeaderRows)
    let justification = computeMonzoAndQuotientJustification(two3FreeClassHeaderRows)

    let two3FreeClassTable: Table<Two3FreeClassAnalysis> = [
        ...two3FreeClassHeaderRows,
        compute23FreeClassRow(two3FreeClassAnalysis),
    ]

    if (!isUndefined(jiPitchScriptGroupSettings.orderedFields)) {
        const {
            table: ordered23FreeClassTable,
            justification: orderedJustification,
        } = computeOrderedTableAndJustification(
            {table: two3FreeClassTable, justification},
            {fieldTitles: TWO_3_FREE_CLASS_FIELD_TITLES, recognizeNameTitleAsBeingFor23FreeClass: true},
        )
        two3FreeClassTable = ordered23FreeClassTable
        justification = orderedJustification
    }

    return sumTexts(
        TWO_3_FREE_CLASS_TABLE_TITLE,
        formatTable(two3FreeClassTable, {headerRowCount, justification}),
    )
}

export {
    compute23FreeClassOutput,
}

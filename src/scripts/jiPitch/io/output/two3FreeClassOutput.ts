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
import {Two3FreeClassAnalysis} from "@sagittal/system"
import {jiPitchScriptGroupSettings} from "../../globals"
import {TWO_3_FREE_CLASS_FIELD_TITLES} from "../fieldTitles"
import {compute23FreeClassHeaderRows} from "../headerRows"
import {computeOrderedTableAndAlignment} from "../orderedFields"
import {compute23FreeClassRow} from "../row"
import {computeSplitMonzoAndQuotientTableAlignment} from "../splitMonzoAndQuotient"
import {TWO_3_FREE_CLASS_TABLE_TITLE} from "../tableTitles"

const compute23FreeClassOutput = (
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
): Io => {
    const two3FreeClassHeaderRows = compute23FreeClassHeaderRows()
    const headerRowCount = count(two3FreeClassHeaderRows)
    let tableAlignment = computeSplitMonzoAndQuotientTableAlignment(two3FreeClassHeaderRows)

    let two3FreeClassTable: Table<Two3FreeClassAnalysis> = [
        ...two3FreeClassHeaderRows,
        compute23FreeClassRow(two3FreeClassAnalysis),
    ]

    if (!isUndefined(jiPitchScriptGroupSettings.orderedFields)) {
        const {
            table: ordered23FreeClassTable,
            tableAlignment: orderedTableAlignment,
        } = computeOrderedTableAndAlignment(
            {table: two3FreeClassTable, tableAlignment},
            {fieldTitles: TWO_3_FREE_CLASS_FIELD_TITLES, recognizeNameTitleAsBeingFor23FreeClass: true},
        )
        two3FreeClassTable = ordered23FreeClassTable
        tableAlignment = orderedTableAlignment
    }

    if (isEmpty(computeExampleElement(two3FreeClassTable))) return BLANK

    return sumTexts(
        TWO_3_FREE_CLASS_TABLE_TITLE,
        formatTable(two3FreeClassTable, {headerRowCount, tableAlignment}),
    )
}

export {
    compute23FreeClassOutput,
}

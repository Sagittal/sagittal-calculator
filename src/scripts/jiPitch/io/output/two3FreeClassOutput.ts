import {count, formatTable, Io, sumTexts, Table} from "../../../../general"
import {Two3FreeClassAnalysis} from "../../../../sagittal"
import {compute23FreeClassHeaderRows} from "../headerRows"
import {compute23FreeClassRow} from "../row"
import {computeMonzoAndQuotientJustification} from "../splitMonzoAndQuotient"
import {TWO_3_FREE_CLASS_TITLE} from "../titles"

const compute23FreeClassOutput = (
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
): Io => {
    const two3FreeClassHeaderRows = compute23FreeClassHeaderRows()
    const headerRowCount = count(two3FreeClassHeaderRows)
    const justification = computeMonzoAndQuotientJustification(two3FreeClassHeaderRows)

    const two3FreeClassTable: Table<Two3FreeClassAnalysis> = [
        ...two3FreeClassHeaderRows,
        compute23FreeClassRow(two3FreeClassAnalysis),
    ]

    return sumTexts(
        TWO_3_FREE_CLASS_TITLE,
        formatTable(two3FreeClassTable, {headerRowCount, justification}),
    )
}

export {
    compute23FreeClassOutput,
}

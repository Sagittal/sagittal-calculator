import {count, formatTable, Io, sumTexts, Table} from "../../../../general"
import {JiPitchAnalysis} from "../../../../sagittal"
import {computeJiPitchHeaderRows} from "../headerRows"
import {computeJiPitchRow} from "../row"
import {computeMaxMonzoLength, computeMonzoAndQuotientJustification} from "../splitMonzoAndQuotient"
import {JI_PITCH_TITLE} from "../titles"

const computeJiPitchOutput = (
    jiPitchAnalysis: JiPitchAnalysis,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength([jiPitchAnalysis])
    const jiPitchHeaderRows = computeJiPitchHeaderRows(maxMonzoLength)
    const headerRowCount = count(jiPitchHeaderRows)
    const justification = computeMonzoAndQuotientJustification(jiPitchHeaderRows)

    const jiPitchTable: Table<JiPitchAnalysis> = [
        ...jiPitchHeaderRows,
        computeJiPitchRow(jiPitchAnalysis, maxMonzoLength),
    ]

    return sumTexts(
        JI_PITCH_TITLE,
        formatTable(jiPitchTable, {headerRowCount, justification}),
    )
}

export {
    computeJiPitchOutput,
}

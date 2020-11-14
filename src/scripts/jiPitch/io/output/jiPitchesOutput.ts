import {count, formatTable, Io, Maybe, Row, Table} from "../../../../general"
import {CommaClassId, JiPitchAnalysis} from "../../../../sagittal"
import {computeJiPitchesOrFindCommasHeaderRows} from "../headerRows"
import {computeJiPitchesRow} from "../row"
import {computeMaxMonzoLength, computeMonzoAndQuotientJustification} from "../splitMonzoAndQuotient"

const computeJiPitchesOutput = (
    jiPitchAnalyses: JiPitchAnalysis[],
    maybeCommaClassIds: Array<Maybe<CommaClassId>>,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(jiPitchAnalyses)
    const jiPitchesHeaderRows = computeJiPitchesOrFindCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(jiPitchesHeaderRows)
    const justification = computeMonzoAndQuotientJustification(jiPitchesHeaderRows)

    const jiPitchesTable: Table<JiPitchAnalysis> = [
        ...jiPitchesHeaderRows,
        ...jiPitchAnalyses.map((jiPitchAnalysis: JiPitchAnalysis, index: number): Row<{of: JiPitchAnalysis}> => {
            return computeJiPitchesRow(jiPitchAnalysis, maybeCommaClassIds[index], maxMonzoLength)
        }),
    ]

    // TODO: TABLES FINESSE: REORDERING COLUMNS
    //  By the way, I did find after all that the ability to reorder columns would have been handy to put cents
    //  Earlier in the list since it's way more important for tinas. could be anything like that.
    return formatTable(jiPitchesTable, {headerRowCount, justification})
}

export {
    computeJiPitchesOutput,
}

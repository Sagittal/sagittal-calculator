import {count, formatTable, Io, Maybe, Row, Table} from "../../../../general"
import {CommaAnalysis, CommaClassId} from "../../../../sagittal"
import {computeFindCommasHeaderRows} from "../headerRows"
import {computeFindCommasRow} from "../row"
import {computeMaxMonzoLength, computeMonzoAndQuotientJustification} from "../splitMonzoAndQuotient"

const computeCommasOutput = (
    commaAnalyses: CommaAnalysis[],
    maybeCommaClassIds: Array<Maybe<CommaClassId>>,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(commaAnalyses)
    const findCommasHeaderRows = computeFindCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(findCommasHeaderRows)
    const justification = computeMonzoAndQuotientJustification(findCommasHeaderRows)

    const findCommasTable: Table<CommaAnalysis> = [
        ...findCommasHeaderRows,
        ...commaAnalyses.map((pitchAnalysis: CommaAnalysis, index: number): Row<{of: CommaAnalysis}> => {
            return computeFindCommasRow(pitchAnalysis, maybeCommaClassIds[index], maxMonzoLength)
        }),
    ]

    // TODO: by the way, I did find after all that the ability to reorder columns would have been handy to put cents
    //  Earlier in the list since it's way more important for tinas. could be anything like that.
    return formatTable(findCommasTable, {headerRowCount, justification})
}

export {
    computeCommasOutput,
}

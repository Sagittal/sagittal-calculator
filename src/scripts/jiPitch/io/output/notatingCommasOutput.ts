import { count, formatTable, Id, Io, Maybe, Row, sumTexts } from "../../../../general"
import { CommaAnalysis, CommaClass } from "../../../../sagittal"
import { computeNotatingCommasHeaderRows } from "../headerRows"
import { computeNotatingCommasRow } from "../row"
import { computeMaxMonzoLength, computeMonzoAndQuotientJustification } from "../splitMonzoAndQuotient"
import { NOTATING_COMMAS_TITLE } from "../titles"

const computeNotatingCommasOutput = (
    notatingCommaAnalyses: CommaAnalysis[],
    maybeCommaClassIds: Array<Maybe<Id<CommaClass>>>,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(notatingCommaAnalyses)
    const notatingCommasHeaderRows = computeNotatingCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(notatingCommasHeaderRows)
    const justification = computeMonzoAndQuotientJustification(notatingCommasHeaderRows)

    const maybeNotatingCommasTable = [
        ...notatingCommasHeaderRows,
        ...notatingCommaAnalyses
            .map((notatingCommaAnalysis: CommaAnalysis, index: number): Row<{ of: CommaAnalysis }> => {
                return computeNotatingCommasRow(notatingCommaAnalysis, maybeCommaClassIds[ index ], maxMonzoLength)
            }),
    ]

    return sumTexts(
        NOTATING_COMMAS_TITLE,
        formatTable(maybeNotatingCommasTable, { headerRowCount, justification }),
    )
}

export {
    computeNotatingCommasOutput,
}

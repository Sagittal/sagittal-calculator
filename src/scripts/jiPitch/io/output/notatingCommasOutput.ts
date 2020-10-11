import { count, formatTable, Id, Io, Maybe, Row, sumTexts } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { computeNotatingCommasHeaderRows } from "../headerRows"
import { computeMaxMonzoLength, computeMonzoAndQuotientJustification } from "../splitMonzoAndQuotient"
import { computeNotatingCommasRow } from "../row"
import { NOTATING_COMMAS_TITLE } from "../titles"

const computeNotatingCommasOutput = (
    notatingCommaAnalyses: CommaAnalysis[],
    maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>>,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(notatingCommaAnalyses)
    const headerRows = computeNotatingCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(headerRows)
    const justification = computeMonzoAndQuotientJustification(headerRows)

    const maybeNotatingCommasTable = [
        ...headerRows,
        ...notatingCommaAnalyses
            .map((notatingCommaAnalysis: CommaAnalysis, index: number): Row<{ of: CommaAnalysis }> => {
                return computeNotatingCommasRow(notatingCommaAnalysis, maybeSymbolClassIds[ index ], maxMonzoLength)
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

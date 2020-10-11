import { count, formatTable, Id, Io, Maybe, Row, sumTexts, Table } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { DEFAULT_FIND_COMMAS_SETTINGS, FindCommasSettings } from "../../findCommas"
import { computeFindCommasHeaderRows } from "../headerRows"
import { computeMaxMonzoLength, computeMonzoAndQuotientJustification } from "../splitMonzoAndQuotient"
import { computeFindCommasRow } from "../row"
import { computeFindCommasTitle } from "../titles"

const computeFindCommasOutput = (
    commaAnalyses: CommaAnalysis[],
    maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>>,
    findCommasSettings: FindCommasSettings = DEFAULT_FIND_COMMAS_SETTINGS,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(commaAnalyses)
    const findCommasHeaderRows = computeFindCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(findCommasHeaderRows)
    const justification = computeMonzoAndQuotientJustification(findCommasHeaderRows)

    const findCommasTable: Table<CommaAnalysis> = [
        ...findCommasHeaderRows,
        ...commaAnalyses.map((commaAnalysis: CommaAnalysis, index: number): Row<{ of: CommaAnalysis }> => {
            return computeFindCommasRow(commaAnalysis, maybeSymbolClassIds[ index ], maxMonzoLength)
        }),
    ]

    return sumTexts(
        computeFindCommasTitle(findCommasSettings),
        formatTable(findCommasTable, { headerRowCount, justification }),
    )
}

export {
    computeFindCommasOutput,
}

import { count, formatTable, Id, Io, Maybe, Row, sumTexts, Table } from "../../../../general"
import { CommaAnalysis, CommaClass } from "../../../../sagittal"
import { DEFAULT_FIND_COMMAS_SETTINGS, FindCommasSettings } from "../../findCommas"
import { computeFindCommasHeaderRows } from "../headerRows"
import { computeFindCommasRow } from "../row"
import { computeMaxMonzoLength, computeMonzoAndQuotientJustification } from "../splitMonzoAndQuotient"
import { computeFindCommasTitle } from "../titles"

const computeFindCommasOutput = (
    commaAnalyses: CommaAnalysis[],
    maybeCommaClassIds: Array<Maybe<Id<CommaClass>>>,
    findCommasSettings: FindCommasSettings = DEFAULT_FIND_COMMAS_SETTINGS,
): Io => {
    const maxMonzoLength = computeMaxMonzoLength(commaAnalyses)
    const findCommasHeaderRows = computeFindCommasHeaderRows(maxMonzoLength)
    const headerRowCount = count(findCommasHeaderRows)
    const justification = computeMonzoAndQuotientJustification(findCommasHeaderRows)

    const findCommasTable: Table<CommaAnalysis> = [
        ...findCommasHeaderRows,
        ...commaAnalyses.map((commaAnalysis: CommaAnalysis, index: number): Row<{ of: CommaAnalysis }> => {
            return computeFindCommasRow(commaAnalysis, maybeCommaClassIds[ index ], maxMonzoLength)
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

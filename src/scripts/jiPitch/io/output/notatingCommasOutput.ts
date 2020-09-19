import { count, formatTable, Id, Io, Maybe, Row, sumTexts } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { computeNotatingCommasHeaderRows } from "../headerRows"
import { computeNotatingCommasRow } from "../row"
import { NOTATING_COMMAS_TITLE } from "../titles"

const computeNotatingCommasOutput = (
    notatingCommaAnalyses: Array<CommaAnalysis>,
    maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>>,
): Io => {
    const headerRows = computeNotatingCommasHeaderRows()
    const headerRowCount = count(headerRows)

    const maybeNotatingCommasTable = [
        ...headerRows,
        ...notatingCommaAnalyses
            .map((notatingCommaAnalysis: CommaAnalysis, index: number): Row<{ of: CommaAnalysis }> => {
                return computeNotatingCommasRow(notatingCommaAnalysis, maybeSymbolClassIds[ index ])
            }),
    ]

    return sumTexts(
        NOTATING_COMMAS_TITLE,
        formatTable(maybeNotatingCommasTable, { headerRowCount }),
    )
}

export {
    computeNotatingCommasOutput,
}

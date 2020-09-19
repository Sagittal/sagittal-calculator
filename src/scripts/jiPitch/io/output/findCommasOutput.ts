import { count, formatTable, Id, Io, Maybe, Row, sumTexts, Table } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { DEFAULT_FIND_COMMAS_SETTINGS, FindCommasSettings } from "../../findCommas"
import { computeFindCommasHeaderRows } from "../headerRows"
import { computeFindCommasRow } from "../row"
import { computeFindCommasTitle } from "../titles"

const computeFindCommasOutput = (
    commaAnalyses: Array<CommaAnalysis>,
    maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>>,
    findCommasSettings: FindCommasSettings = DEFAULT_FIND_COMMAS_SETTINGS,
): Io => {
    const findCommasHeaderRows = computeFindCommasHeaderRows()
    const headerRowCount = count(findCommasHeaderRows)

    const findCommasTable: Table<CommaAnalysis> = [
        ...findCommasHeaderRows,
        ...commaAnalyses.map((commaAnalysis: CommaAnalysis, index: number): Row<{ of: CommaAnalysis }> => {
            return computeFindCommasRow(commaAnalysis, maybeSymbolClassIds[index])
        }),
    ]

    return sumTexts(
        computeFindCommasTitle(findCommasSettings),
        formatTable(findCommasTable, { headerRowCount }),
    )
}

export {
    computeFindCommasOutput,
}

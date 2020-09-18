import { count, formatTable, Id, Io, sumTexts, Table } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { DEFAULT_FIND_COMMAS_SETTINGS, FindCommasSettings } from "../../findCommas"
import { computeFindCommasHeaderRows } from "../headerRows"
import { computeFindCommasRow } from "../row"
import { computeFindCommasTitle } from "../titles"

const computeFindCommasOutput = (
    commas: Array<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }>,
    findCommasSettings: FindCommasSettings = DEFAULT_FIND_COMMAS_SETTINGS,
): Io => {
    const findCommasHeaderRows = computeFindCommasHeaderRows()
    const headerRowCount = count(findCommasHeaderRows)

    const findCommasTable: Table<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }> = [
        ...findCommasHeaderRows,
        ...commas.map(computeFindCommasRow),
    ]

    return sumTexts(
        computeFindCommasTitle(findCommasSettings),
        formatTable(findCommasTable, { headerRowCount }),
    )
}

export {
    computeFindCommasOutput,
}

import { addTexts, count, formatTable, Id, Io, Table } from "../../../../general"
import { CommaAnalysis, DEFAULT_FIND_COMMAS_OPTIONS, SymbolClass } from "../../../../sagittal"
import { FindCommasOptions } from "../../types"
import { computeFindCommasHeaderRows } from "../headerRows"
import { computeFindCommasRow } from "../row"
import { computeFindCommasTitle } from "../titles"

const computeFindCommasOutput = (
    commas: Array<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }>,
    findCommasOptions: FindCommasOptions = DEFAULT_FIND_COMMAS_OPTIONS,
): Io => {
    const findCommasHeaderRows = computeFindCommasHeaderRows()
    const headerRowCount = count(findCommasHeaderRows)

    const findCommasTable: Table<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }> = [
        ...findCommasHeaderRows,
        ...commas.map(computeFindCommasRow),
    ]

    return addTexts(
        computeFindCommasTitle(findCommasOptions), 
        formatTable(findCommasTable, { headerRowCount })
    )
}

export {
    computeFindCommasOutput,
}

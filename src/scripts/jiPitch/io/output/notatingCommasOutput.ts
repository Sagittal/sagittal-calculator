import { addTexts, count, formatTable, Id, Io } from "../../../../general"
import { CommaAnalysis, SymbolClass } from "../../../../sagittal"
import { computeNotatingCommasWithMaybeSagittalSymbolClassesHeaderRows } from "../headerRows"
import { computeNotatingCommasRow } from "../row"
import { NOTATING_COMMAS_TITLE } from "../titles"

const computeNotatingCommasOutput = (
    notatingCommaAnalysesWithMaybeSagittalSymbolClassIds: Array<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }>,
): Io => {
    const headerRows = computeNotatingCommasWithMaybeSagittalSymbolClassesHeaderRows()
    const headerRowCount = count(headerRows)

    const maybeNotatingCommasWithMaybeSagittalSymbolClassesTable = [
        ...headerRows,
        ...notatingCommaAnalysesWithMaybeSagittalSymbolClassIds.map(computeNotatingCommasRow),
    ]

    return addTexts(
        NOTATING_COMMAS_TITLE,
        formatTable(maybeNotatingCommasWithMaybeSagittalSymbolClassesTable, { headerRowCount }),
    )
}

export {
    computeNotatingCommasOutput,
}

import { formatTable, Id, Io, Table } from "../../../general"
import { CommaAnalysis, SymbolClass } from "../../../sagittal"
import { computeCommaRow } from "./commaRow"
import { FIND_COMMAS_HEADER_ROW } from "./headerRows"

const computeFindCommasTable = (commas: Array<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }>): Io => {
    const commaTable: Table<CommaAnalysis & { symbolClassId?: Id<SymbolClass> }> = commas.map(computeCommaRow)
    commaTable.unshift(FIND_COMMAS_HEADER_ROW)

    return formatTable(commaTable)
}

export {
    computeFindCommasTable,
}

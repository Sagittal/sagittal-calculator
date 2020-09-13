import { formatTable, Id, Io, Table } from "../../../general"
import { CommaAnalysis, JiSymbol } from "../../../sagittal"
import { computeCommaRow } from "./commaRow"
import { FIND_COMMAS_HEADER_ROW } from "./headerRows"

const computeFindCommasTable = (commas: Array<CommaAnalysis & { symbolId?: Id<JiSymbol> }>): Io => {
    const commaTable: Table<CommaAnalysis & { symbolId?: Id<JiSymbol> }> = commas.map(computeCommaRow)
    commaTable.unshift(FIND_COMMAS_HEADER_ROW)

    return formatTable(commaTable)
}

export {
    computeFindCommasTable,
}

import { formatTable, IO, Table } from "../../../general"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "../types"
import { computeCommaRow } from "./commaRow"
import { FIND_COMMAS_HEADER_ROW } from "./headerRows"

const computeFindCommasTable = (commas: AnalyzedRationalPitchWithMaybeSagittalSymbol[]): IO => {
    const commaTable: Table<AnalyzedRationalPitchWithMaybeSagittalSymbol> = commas.map(computeCommaRow)
    commaTable.unshift(FIND_COMMAS_HEADER_ROW)

    return formatTable(commaTable)
}

export {
    computeFindCommasTable,
}

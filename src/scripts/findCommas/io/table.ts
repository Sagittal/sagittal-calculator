import { formatTable, IO, Table } from "../../../general"
import { Comma } from "../../../sagittal"
import { computeCommaRow } from "./commaRow"
import { FIND_COMMAS_HEADER_ROW } from "./headerRow"

const computeFindCommasTable = (commas: Comma[]): IO => {
    const commaTable: Table<Comma> = commas.map(computeCommaRow)
    commaTable.unshift(FIND_COMMAS_HEADER_ROW)

    return formatTable(commaTable)
}

export {
    computeFindCommasTable,
}

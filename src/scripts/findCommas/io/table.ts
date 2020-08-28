import { formatTableForForum, formatTableForTerminal, IO, Table } from "../../../general"
import { Comma } from "../../../sagittal"
import { computeCommaRow } from "./commaRow"
import { FIND_COMMAS_HEADER_ROW } from "./headerRow"

const computeFindCommasTable = (commas: Comma[], { forForum = false }: { forForum?: boolean } = {}): IO => {
    const commaTable: Table = commas.map(computeCommaRow)
    commaTable.unshift(FIND_COMMAS_HEADER_ROW)

    return forForum ? formatTableForForum(commaTable) : formatTableForTerminal(commaTable)
}

export {
    computeFindCommasTable,
}

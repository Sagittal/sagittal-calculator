import { Comma, computeForumTable, computeTerminalTable, formatComma, IO } from "../../../general"
import { FIND_COMMAS_HEADER_ROW } from "./headerRow"

// TODO: add types for Row = IO[] & (brand) and Col = IO[] & (brand) and Table = IO[][] & (brand)

const computeFindCommasTable = (commas: Comma[], { forForum = false }: { forForum?: boolean } = {}): IO => {
    const formattedCommas: IO[] = commas.map(comma => formatComma(comma))
    formattedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return (forForum ? computeForumTable(formattedCommas) : computeTerminalTable(formattedCommas)).join("\n") as IO
}

export {
    computeFindCommasTable,
}

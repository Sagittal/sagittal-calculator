import { alignTable, forumTable, IO } from "../../../general"
import { formatComma, NamedComma } from "../../../notations"
import { FIND_COMMAS_HEADER_ROW } from "./headerRow"

const formatCommas = (commas: NamedComma[], { forForum = false }: { forForum?: boolean } = {}): IO => {
    const formattedCommas: IO[] = commas.map(comma => formatComma(comma))
    formattedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return (forForum ? forumTable(formattedCommas) : alignTable(formattedCommas)).join("\n") as IO
}

export {
    formatCommas,
}

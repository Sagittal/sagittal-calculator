import { alignTable, forumTable } from "../../../general"
import { formatComma, NamedComma, SagittalComma } from "../../../notations"
import { FIND_COMMAS_HEADER_ROW } from "./headerRow"

const formatCommas = (commas: NamedComma[], { forForum = false }: { forForum?: boolean } = {}): string => {
    const formattedCommas: string[] = commas.map(comma => formatComma(comma))
    formattedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return (forForum ? forumTable(formattedCommas) : alignTable(formattedCommas)).join("\n")
}

export {
    formatCommas,
}

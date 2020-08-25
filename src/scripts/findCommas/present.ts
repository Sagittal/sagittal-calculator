import { alignTable, forumTable } from "../../general"
import { presentComma, SagittalComma } from "../../notations"
import { FIND_COMMAS_HEADER_ROW } from "./headerRow"

const presentCommas = (commas: SagittalComma[], { forForum = false }: { forForum?: boolean } = {}) => {
    const presentedCommas = commas.map(comma => presentComma(comma))
    presentedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return (forForum ? forumTable(presentedCommas) : alignTable(presentedCommas)).join("\n")
}

export {
    presentCommas,
}

import { alignTable, Comma, forumTable, presentComma } from "../../general"
import { FIND_COMMAS_HEADER_ROW } from "./headerRow"

const presentCommas = (commas: Comma[], { forForum = false }: { forForum?: boolean } = {}) => {
    const presentedCommas = commas.map(comma => presentComma(comma))
    presentedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return (forForum ? forumTable(presentedCommas) : alignTable(presentedCommas)).join("\n")
}

export {
    presentCommas,
}

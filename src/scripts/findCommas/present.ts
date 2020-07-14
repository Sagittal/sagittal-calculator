import { alignTable, Comma, presentComma } from "../../general"
import { FIND_COMMAS_HEADER_ROW } from "./headerRow"

const presentCommas = (commas: Comma[]) => {
    const presentedCommas = commas.map(comma => presentComma(comma))
    presentedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return alignTable(presentedCommas).join("\n")
}

export {
    presentCommas,
}

import { FIND_COMMAS_HEADER_ROW } from "./headerRow"
import { presentComma } from "./comma"
import { alignTable } from "../../table"
import { Comma } from "../types"

const presentCommas = (commas: Comma[]) => {
    const presentedCommas = commas.map(comma => presentComma(comma))
    presentedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return alignTable(presentedCommas).join("\n")
}


export {
    presentCommas,
}

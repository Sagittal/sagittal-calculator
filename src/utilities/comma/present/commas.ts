import {FIND_COMMAS_HEADER_ROW} from "./headerRow"
import {presentComma} from "./comma"
import {alignTable} from "../../table"

const presentCommas = commas => {
    const presentedCommas = commas.map(comma => presentComma(comma))
    presentedCommas.unshift(FIND_COMMAS_HEADER_ROW)

    return alignTable(presentedCommas).join("\n")
}


export {
    presentCommas,
}

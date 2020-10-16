import { BLANK, isEmpty } from "../../general"
import { PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL } from "../constants"
import { SHAFT_UP } from "./elements"
import { Flacco, SagittalSymbol } from "./types"

const computeSymbolFromFlacco = (
    flacco: Flacco,
): SagittalSymbol => {
    if (isEmpty(flacco.combo)) return PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL

    const joinedFlacco = flacco.combo.join(BLANK)

    const initialShaft = joinedFlacco[ 0 ] === SHAFT_UP ? SHAFT_UP : BLANK
    const terminalShaft = joinedFlacco[ joinedFlacco.length - 1 ] === SHAFT_UP ? SHAFT_UP : BLANK

    const deshaftedExceptForCorrectInternalShaftFlacco = joinedFlacco
        .replace(/\|\|/g, "_")
        .replace(/\|/g, BLANK)
        .replace("_", SHAFT_UP)

    return `${initialShaft}${deshaftedExceptForCorrectInternalShaftFlacco}${terminalShaft}` as SagittalSymbol
}

export {
    computeSymbolFromFlacco,
}

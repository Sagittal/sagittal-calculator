import { BLANK, finalElement, isEmpty } from "../../general"
import { Flacco, SagittalSymbol } from "./types"

const computeSymbolFromFlacco = (flacco: Flacco): SagittalSymbol => {
    if (isEmpty(flacco.combo)) return "(|//|)" as SagittalSymbol

    const joinedFlacco = flacco.combo.join(BLANK)

    const initialShaft = joinedFlacco[0] === "|" ? "|" : BLANK
    const terminalShaft = joinedFlacco[ joinedFlacco.length - 1 ] === "|" ? "|" : BLANK

    const deshaftedExceptForCorrectInternalShaftFlacco = joinedFlacco
        .replace(/\|\|/g, "_")
        .replace(/\|/g, BLANK)
        .replace("_", "|")

    return `${initialShaft}${deshaftedExceptForCorrectInternalShaftFlacco}${terminalShaft}` as SagittalSymbol
}

export {
    computeSymbolFromFlacco,
}

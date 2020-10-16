import { ANY_FLAG_CHAR, PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL } from "../constants"
import { SagittalSymbol } from "./types"

const apotomeShift = (symbol: SagittalSymbol): SagittalSymbol => {
    if (symbol === PARENTHETICAL_CONVENTIONAL_NATURAL_SYMBOL) return "/||\\" as SagittalSymbol

    let apotomeShiftedSymbol = symbol
        .replace("|", "|||")
        .replace("||||", "X")
    
    if (!apotomeShiftedSymbol.match(ANY_FLAG_CHAR)) {
        apotomeShiftedSymbol = apotomeShiftedSymbol
            .replace("|||", "/||\\") 
    }
    
    return apotomeShiftedSymbol as SagittalSymbol
}

export {
    apotomeShift,
}

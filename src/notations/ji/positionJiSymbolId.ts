import { Cents, Id } from "../../general"
import { getSagittalComma } from "../getComma"
import { JI_SYMBOLS } from "./jiSymbols"
import { JiSymbol } from "./types"

const computePositionJiSymbolId = (position: Cents | undefined): Id<JiSymbol> | undefined => {
    if (!position) {
        return undefined
    }

    const jiSymbol = JI_SYMBOLS.find(jiSymbol => {
        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)

        return primaryComma.cents === position
    })

    if (jiSymbol) {
        return jiSymbol.id
    } else {
        return undefined
    }
}

export {
    computePositionJiSymbolId,
}

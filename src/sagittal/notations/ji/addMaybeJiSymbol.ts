import { deepEquals, Id, isUndefined, Maybe } from "../../../general"
import { AnalyzedRationalPitch } from "../../types"
import { getSagittalComma } from "../getSagittalComma"
import { JI_SYMBOLS } from "./jiSymbols"
import { JiSymbol } from "./types"

const addMaybeJiSymbol = (comma: AnalyzedRationalPitch): AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> } => {
    const maybeSymbol: Maybe<JiSymbol> = JI_SYMBOLS.find(jiSymbol => {
        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)

        return deepEquals(comma.monzo, primaryComma.monzo)
    })

    if (isUndefined(maybeSymbol)) {
        return comma
    } else {
        return { ...comma, symbolId: maybeSymbol.id }
    }
}

export {
    addMaybeJiSymbol,
}

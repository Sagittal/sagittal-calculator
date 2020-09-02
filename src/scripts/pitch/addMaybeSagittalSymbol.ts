import { deepEquals, Id, isUndefined, Maybe } from "../../general"
import { AnalyzedRationalPitch, getSagittalComma, JiSymbol, JI_SYMBOLS } from "../../sagittal"

const addMaybeSagittalSymbol = (comma: AnalyzedRationalPitch): AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> } => {
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
    addMaybeSagittalSymbol,
}

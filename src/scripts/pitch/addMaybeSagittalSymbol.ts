import { deepEquals, isUndefined, Maybe } from "../../general"
import { AnalyzedRationalPitch, getSagittalComma, JiSymbol, JI_SYMBOLS } from "../../sagittal"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "./types"

const addMaybeSagittalSymbol = (comma: AnalyzedRationalPitch): AnalyzedRationalPitchWithMaybeSagittalSymbol => {
    const maybeSymbol: Maybe<JiSymbol> = JI_SYMBOLS.find(jiSymbol => {
        const primaryComma = getSagittalComma(jiSymbol.primaryCommaId)

        return deepEquals(comma.monzo, primaryComma.monzo)
    })

    if (isUndefined(maybeSymbol)) {
        return comma
    } else {
        return { ...comma, symbol: maybeSymbol.ascii }
    }
}

export {
    addMaybeSagittalSymbol,
}

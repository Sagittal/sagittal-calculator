import { Maybe } from "../../general"
import { AnalyzedRationalPitch, SymbolLongAscii } from "../../sagittal"
import { getMaybeSagittalSymbolWithPrimaryCommaName } from "./maybeSagittalSymbolFromCommaName"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "./types"

const addMaybeSagittalSymbol = (rationalPitch: AnalyzedRationalPitch): AnalyzedRationalPitchWithMaybeSagittalSymbol => {
    const maybeSymbol: Maybe<SymbolLongAscii> = getMaybeSagittalSymbolWithPrimaryCommaName(rationalPitch.name)

    return { ...rationalPitch, symbol: maybeSymbol }
}

// TODO: test, and/or do we really need both this and getMaybeSagittalSymbolWithPrimaryCommaName ?

export {
    addMaybeSagittalSymbol,
}

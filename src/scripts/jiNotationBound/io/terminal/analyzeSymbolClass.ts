import { Id } from "../../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    getIntroducingJiNotationLevel,
    getMina,
    getRepresentativeSymbol,
    getSagittalComma,
    getSymbolClass,
    SagittalComma,
    SymbolClass,
} from "../../../../sagittal"
import { SymbolClassAnalysis } from "./types"

// TODO: is this now an symbolClassAnalysis? ANSWER: so it is, but then does it really belong in an "io" directory?
const analyzeSymbolClass = (
    symbolClassId: Id<SymbolClass>,
): SymbolClassAnalysis => {
    const symbolClass = getSymbolClass(symbolClassId)
    const { primaryCommaId, ...otherSymbolProperties } = symbolClass

    const primaryComma: SagittalComma = getSagittalComma(primaryCommaId)
    const primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> } =
        analyzeComma(primaryComma) as CommaAnalysis & { id: Id<SagittalComma> }

    const { ascii, unicode } = getRepresentativeSymbol(symbolClassId)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(symbolClassId)
    const mina = getMina(symbolClassId)

    return { ...otherSymbolProperties, mina, ascii, unicode, introducingJiNotationLevel, primaryCommaAnalysis }
}

export {
    analyzeSymbolClass,
}

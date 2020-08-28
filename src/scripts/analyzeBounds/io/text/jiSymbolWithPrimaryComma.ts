import { Id } from "../../../../general"
import { getJiSymbol, getSagittalComma, JiSymbol } from "../../../../notations"
import { JiSymbolWithPrimaryComma } from "./types"

const computeJiSymbolWithPrimaryComma = (jiSymbolId: Id<JiSymbol>): JiSymbolWithPrimaryComma => {
    const jiSymbol = getJiSymbol(jiSymbolId)
    const { primaryCommaId, ...otherSymbolProperties } = jiSymbol

    return { ...otherSymbolProperties, primaryComma: getSagittalComma(primaryCommaId) }
}

export {
    computeJiSymbolWithPrimaryComma,
}

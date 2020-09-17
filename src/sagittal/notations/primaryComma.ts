import { Id } from "../../general"
import { getSagittalComma } from "./getSagittalComma"
import { getSymbolClass } from "./symbolClass"
import { SagittalComma, SymbolClass } from "./types"

const getPrimaryComma = (symbolClassId: Id<SymbolClass>): SagittalComma => {
    const symbolClass = getSymbolClass(symbolClassId)

    return getSagittalComma(symbolClass.primaryCommaId)
}

export {
    getPrimaryComma,
}

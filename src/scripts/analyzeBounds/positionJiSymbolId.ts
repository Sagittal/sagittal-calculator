import { Cents, Id, Maybe } from "../../general"
import { getSagittalComma, JiSymbol, JI_SYMBOLS } from "../../sagittal"

const computePositionJiSymbolId = (position: Maybe<Cents>): Maybe<Id<JiSymbol>> => {
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

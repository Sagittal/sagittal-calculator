import { formatMonzo, formatNumber, formatRatio, Id, IO, Row } from "../../../general"
import { getJiSymbol, getSagittalComma, JiSymbol } from "../../../sagittal"

const computeExactlyNotatingJiSymbolRow = (jiSymbolId: Id<JiSymbol>): Row<JiSymbol> => {
    const { primaryCommaId, ascii: symbol } = getJiSymbol(jiSymbolId)
    const { name, monzo, cents, ratio } = getSagittalComma(primaryCommaId)

    const formattedRatio = formatRatio(ratio)
    const formattedMonzo = formatMonzo(monzo)
    const formattedCents = formatNumber(cents)

    return [
        symbol,
        name,
        formattedRatio,
        formattedMonzo,
        formattedCents,
    ] as IO[] as Row<JiSymbol>
}

export {
    computeExactlyNotatingJiSymbolRow,
}

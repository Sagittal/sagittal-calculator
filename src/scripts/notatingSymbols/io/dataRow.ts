import { formatMonzo, formatNumber, formatRatio, Id, IO } from "../../../general"
import { getJiSymbol, getSagittalComma, JiSymbol } from "../../../notations"

const computeNotatingSymbolDataRow = (jiSymbolId: Id<JiSymbol>): IO => {
    const { primaryCommaId, ascii: symbol } = getJiSymbol(jiSymbolId)
    const { name, monzo, cents, ratio } = getSagittalComma(primaryCommaId)

    const formattedRatio = formatRatio(ratio)
    const formattedMonzo = formatMonzo(monzo)
    const formattedCents = formatNumber(cents)

    return `${symbol}\t${name}\t${formattedRatio}\t${formattedMonzo}\t${formattedCents}` as IO
}

export {
    computeNotatingSymbolDataRow,
}

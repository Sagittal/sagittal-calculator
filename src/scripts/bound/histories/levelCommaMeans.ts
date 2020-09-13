import { Cents, CentsPosition, computeCentsFromPitch, Id, indexOfFinalElement, Name, Pitch } from "../../../general"
import { getJiSymbol, getSagittalComma, JiSymbol, Level, LEVELS_SYMBOL_IDS, SymbolLongAscii } from "../../../sagittal"

const getJiSymbolCents = (jiSymbolId: Id<JiSymbol>): Cents => {
    const jiSymbol = getJiSymbol(jiSymbolId)
    const primaryCommaId = jiSymbol.primaryCommaId
    const primaryComma = getSagittalComma(primaryCommaId)

    return computeCentsFromPitch(primaryComma)
}

const getJiSymbolAscii = (jiSymbolId: Id<JiSymbol>): SymbolLongAscii => {
    const jiSymbol = getJiSymbol(jiSymbolId)

    return jiSymbol.ascii
}

const computeLevelCommaMeans = (level: Level): CentsPosition[] => {
    const levelSymbolIds = LEVELS_SYMBOL_IDS[ level ]

    const levelSymbolIdsExcludingTheLastSymbol = levelSymbolIds.slice(0, indexOfFinalElement(levelSymbolIds))

    return levelSymbolIdsExcludingTheLastSymbol.map((jiSymbolId: Id<JiSymbol>, index: number): CentsPosition => {
        const nextJiSymbolId = levelSymbolIds[ index + 1 ]

        const cents = (getJiSymbolCents(jiSymbolId) + getJiSymbolCents(nextJiSymbolId)) / 2 as Cents
        const name = [getJiSymbolAscii(jiSymbolId), getJiSymbolAscii(nextJiSymbolId)].join(" ") as Name<Pitch>

        return {
            name,
            cents,
        }
    })
}

export {
    computeLevelCommaMeans,
}

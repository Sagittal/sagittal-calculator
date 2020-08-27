import { Cents, Name, Position } from "../../general"
import { getSagittalComma } from "../getComma"
import { getJiSymbol } from "./jiSymbol"
import { LEVELS_SYMBOL_IDS } from "./levelsJiSymbolIds"
import { Level } from "./types"

const computeLevelCommaMeans = (level: Level): Position[] => {
    const levelSymbolIds = LEVELS_SYMBOL_IDS[ level ]

    const levelSymbolIdsExcludingTheLastSymbol = levelSymbolIds.slice(0, levelSymbolIds.length - 1)

    return levelSymbolIdsExcludingTheLastSymbol.map((jiSymbolId, index): Position => {
        const jiSymbol = getJiSymbol(jiSymbolId)
        const primaryCommaId = jiSymbol.primaryCommaId
        const primaryComma = getSagittalComma(primaryCommaId)

        const nextJiSymbolId = levelSymbolIds[ index + 1 ]
        const nextJiSymbol = getJiSymbol(nextJiSymbolId)
        const nextPrimaryCommaId = nextJiSymbol.primaryCommaId
        const nextPrimaryComma = getSagittalComma(nextPrimaryCommaId)

        return {
            name: [jiSymbol.ascii, nextJiSymbol.ascii].join(" ") as Name<Position>,
            cents: (primaryComma.cents + nextPrimaryComma.cents) / 2 as Cents,
        }
    })
}

export {
    computeLevelCommaMeans,
}

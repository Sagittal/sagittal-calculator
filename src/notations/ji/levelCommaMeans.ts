import { Cents, Name, Position } from "../../general"
import { LEVELS_SYMBOL_IDS } from "./levelsSymbolIds"
import { getSymbol } from "./symbol"
import { Level } from "./types"

const computeLevelCommaMeans = (level: Level): Position[] => {
    const levelSymbolIds = LEVELS_SYMBOL_IDS[ level ]

    const levelSymbolIdsExcludingTheLastSymbol = levelSymbolIds.slice(0, levelSymbolIds.length - 1)

    return levelSymbolIdsExcludingTheLastSymbol.map((symbolId, index): Position => {
        const nextSymbolId = levelSymbolIds[ index + 1 ]
        const symbol = getSymbol(symbolId)
        const nextSymbol = getSymbol(nextSymbolId)

        return {
            name: [symbol.ascii, nextSymbol.ascii].join(" ") as Name<Position>,
            cents: (symbol.primaryComma.cents + nextSymbol.primaryComma.cents) / 2 as Cents,
        }
    })
}

export {
    computeLevelCommaMeans,
}

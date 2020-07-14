import { Cents, Name, Position } from "../../general"
import { LEVELS_SYMBOLS } from "./levelsSymbols"
import { Level } from "./types"

const computeLevelCommaMeans = (level: Level): Position[] => {
    const levelSymbols = LEVELS_SYMBOLS[ level ]

    const levelSymbolsExcludingTheLastSymbol = levelSymbols.slice(0, levelSymbols.length - 1)

    return levelSymbolsExcludingTheLastSymbol.map((symbol, index): Position => {
        const nextSymbol = levelSymbols[ index + 1 ]

        return {
            name: [symbol.ascii, nextSymbol.ascii].join(" ") as Name<Position>,
            cents: (symbol.primaryComma.cents + nextSymbol.primaryComma.cents) / 2 as Cents,
        }
    })
}

export {
    computeLevelCommaMeans,
}

import { LEVELS_SYMBOLS } from "./levelsSymbols"
import { Level } from "./types"
import { EventName, SnappablePosition } from "../../scripts/analyzeBounds/types"
import { Cents } from "../../utilities/types"

const computeLevelCommaMeans = (level: Level): SnappablePosition[] => {
    const levelSymbols = LEVELS_SYMBOLS[ level ]

    const levelSymbolsExcludingTheLastSymbol = levelSymbols.slice(0, levelSymbols.length - 1)

    return levelSymbolsExcludingTheLastSymbol.map((symbol, index): SnappablePosition => {
        const nextSymbol = levelSymbols[ index + 1 ]

        return {
            name: [symbol.ascii, nextSymbol.ascii].join(" ") as EventName,
            position: (symbol.primaryComma.position + nextSymbol.primaryComma.position) / 2 as Cents,
        }
    })
}

export {
    computeLevelCommaMeans,
}

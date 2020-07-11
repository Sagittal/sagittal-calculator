import { LEVELS_SYMBOLS } from "./levelsSymbols"
import { Level } from "./types"
import { SnappablePosition } from "../../scripts/analyzeBounds/types"

const computeLevelCommaMeans = (level: Level): SnappablePosition[] => {
    const levelSymbols = LEVELS_SYMBOLS[ level ]

    const levelSymbolsExcludingTheLastSymbol = levelSymbols.slice(0, levelSymbols.length - 1)

    return levelSymbolsExcludingTheLastSymbol.map((symbol, index) => {
        const nextSymbol = levelSymbols[ index + 1 ]

        return {
            name: [symbol.ascii, nextSymbol.ascii].join(" "),
            position: (symbol.primaryComma.position + nextSymbol.primaryComma.position) / 2,
        }
    }) as SnappablePosition[]
}

export {
    computeLevelCommaMeans,
}

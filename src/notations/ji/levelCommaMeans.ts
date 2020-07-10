import {LEVELS_SYMBOLS} from "./levelsSymbols"

const computeLevelCommaMeans = level => {
    const levelSymbols = LEVELS_SYMBOLS[level]

    const levelSymbolsExcludingTheLastSymbol = levelSymbols.slice(0, levelSymbols.length - 1)

    return levelSymbolsExcludingTheLastSymbol.map((symbol, index) => {
        const nextSymbol = levelSymbols[index + 1]

        return {
            name: [symbol.ascii, nextSymbol.ascii].join(" "),
            position: (symbol.primaryComma.position + nextSymbol.primaryComma.position) / 2,
        }
    })
}

export {
    computeLevelCommaMeans,
}

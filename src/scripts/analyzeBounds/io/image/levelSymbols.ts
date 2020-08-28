import { Id, IO } from "../../../../general"
import { getJiSymbol, getSagittalComma, JiSymbol, Level, LEVELS_SYMBOL_IDS } from "../../../../sagittal"
import { formatMina } from "../terminal"
import { LEVEL_CENTERS } from "./levelHeights"
import { DOT_SIZE, MINA_OFFSET, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeLevelSymbols = () => {
    const levelSymbolElements: IO[] = [] as IO[]

    const levelsSymbolIdsEntries = Object.entries(LEVELS_SYMBOL_IDS) as Array<[Level, Array<Id<JiSymbol>>]>
    levelsSymbolIdsEntries.forEach(([level, levelSymbolIds]: [Level, Array<Id<JiSymbol>>]) => {
        if (level === Level.INSANE) {
            return
        }

        const centerY = LEVEL_CENTERS[ level ]
        const dotY = centerY - SYMBOL_OFFSET
        const symbolY = centerY + SYMBOL_OFFSET

        levelSymbolIds.forEach(levelSymbolId => {
            const levelSymbol: JiSymbol = getJiSymbol(levelSymbolId)
            const { primaryCommaId, ascii, unicode, mina } = levelSymbol
            const primaryComma = getSagittalComma(primaryCommaId)

            const positionX = computeX(primaryComma.cents)

            const adjustedUnicode = ascii === "/|~" ?
                unicode + "         " :
                ascii === ",,(|(" ? "         " + unicode : unicode

            levelSymbolElements.push(
                `  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n` as IO,
            )
            levelSymbolElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="10px" font-family="Helvetica">${ascii}</text>\n` as IO) // For searchability by ascii
            levelSymbolElements.push(`  <text fill="black" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${adjustedUnicode}</text>\n` as IO)

            if (level === Level.EXTREME) {
                const minaY = symbolY - MINA_OFFSET
                levelSymbolElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${formatMina(mina)}</text>\n` as IO)
            }
        })
    })

    return levelSymbolElements
}

export {
    visualizeLevelSymbols,
}

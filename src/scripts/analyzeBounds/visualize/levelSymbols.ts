import {LEVELS_SYMBOLS} from "../../../notations/ji/levelsSymbols"
import {LEVEL_CENTERS} from "./levelHeights"
import {SYMBOL_OFFSET, DOT_SIZE, MINA_OFFSET} from "./sizes"
import {computeX} from "./x"
import {presentMina} from "../present/mina"

const visualizeLevelSymbols = () => {
    const levelSymbolElements = []

    Object.entries(LEVELS_SYMBOLS).forEach(([level, levelSymbols]: any) => {
        if (level === "INSANE") return

        const centerY = LEVEL_CENTERS[level]
        const dotY = centerY - SYMBOL_OFFSET
        const symbolY = centerY + SYMBOL_OFFSET

        levelSymbols.forEach(levelSymbol => {
            const {position, ascii, unicode, mina} = levelSymbol

            const positionX = computeX(position)

            const adjustedUnicode = ascii === "/|~" ? unicode + "         " : ascii === ",,(|(" ? "         " + unicode : unicode

            levelSymbolElements.push(`  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n`)
            levelSymbolElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="10px" font-family="Helvetica">${ascii}</text>\n`) // for searchability by ascii
            levelSymbolElements.push(`  <text fill="black" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${adjustedUnicode}</text>\n`)

            if (level === "EXTREME") {
                const minaY = symbolY - MINA_OFFSET
                levelSymbolElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${presentMina(mina)}</text>\n`)
            }
        })
    })

    return levelSymbolElements
}

export {
    visualizeLevelSymbols,
}

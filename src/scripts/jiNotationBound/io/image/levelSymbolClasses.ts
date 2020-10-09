import { add, DEFAULT_PRECISION, Id, Io, Px, round, subtract } from "../../../../general"
import {
    analyzeSymbolClass,
    JiNotationLevel,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
    SymbolClass,
} from "../../../../sagittal"
import { formatMinaName } from "../terminal"
import { JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { DOT_SIZE, MINA_OFFSET, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeJiNotationLevelSymbolClasses = (): Io[] => {
    const jiNotationLevelSymbolElements: Io[] = [] as Io[]

    const jiNotationLevelsSymbolClassIdsEntries =
        Object.entries(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS) as Array<[JiNotationLevel, Array<Id<SymbolClass>>]>
    jiNotationLevelsSymbolClassIdsEntries.forEach((
        [jiNotationLevel, jiNotationLevelSymbolClassIds]: [JiNotationLevel, Array<Id<SymbolClass>>],
    ): void => {
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const centerY: Px = round(JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ], DEFAULT_PRECISION)
        const dotY: Px = round(subtract(centerY, SYMBOL_OFFSET), DEFAULT_PRECISION)
        const symbolY: Px = round(add(centerY, SYMBOL_OFFSET), DEFAULT_PRECISION)

        jiNotationLevelSymbolClassIds.forEach((jiNotationLevelSymbolClassId: Id<SymbolClass>): void => {
            const { minaName, primaryCommaAnalysis, ascii, unicode } = analyzeSymbolClass(jiNotationLevelSymbolClassId)

            const positionX: Px = computeX(primaryCommaAnalysis.pitch)

            const adjustedUnicode = ascii === "/|~" ?
                unicode + "         " :
                ascii === ",,(|(" ? "         " + unicode : unicode

            jiNotationLevelSymbolElements.push(
                `  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n` as Io,
            )
            jiNotationLevelSymbolElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="10px" font-family="Helvetica">${ascii}</text>\n` as Io) // For searchability by ascii
            jiNotationLevelSymbolElements.push(`  <text fill="black" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${adjustedUnicode}</text>\n` as Io)

            if (jiNotationLevel === JiNotationLevel.EXTREME) {
                const minaY: Px = round(subtract(symbolY, MINA_OFFSET), DEFAULT_PRECISION)
                jiNotationLevelSymbolElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${formatMinaName(minaName)}</text>\n` as Io)
            }
        })
    })

    return jiNotationLevelSymbolElements
}

export {
    visualizeJiNotationLevelSymbolClasses,
}

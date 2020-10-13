import { add, DEFAULT_PRECISION, Id, Io, Px, round, subtract } from "../../../../general"
import { CommaClass, JiNotationLevel, JI_NOTATION_LEVELS_COMMA_CLASS_IDS } from "../../../../sagittal"
import { computeCommaClassInfo } from "../commaClassInfo"
import { formatMinaName } from "../terminal"
import { JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { DOT_SIZE, MINA_OFFSET, SYMBOL_OFFSET } from "./sizes"
import { computeX } from "./x"

const visualizeJiNotationLevelCommaClasses = (): Io[] => {
    const jiNotationLevelCommaClassElements: Io[] = [] as Io[]

    const jiNotationLevelsCommaClassIdsEntries =
        Object.entries(JI_NOTATION_LEVELS_COMMA_CLASS_IDS) as Array<[JiNotationLevel, Array<Id<CommaClass>>]>
    jiNotationLevelsCommaClassIdsEntries.forEach((
        [jiNotationLevel, jiNotationLevelCommaClassIds]: [JiNotationLevel, Array<Id<CommaClass>>],
    ): void => {
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const centerY: Px = round(JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ], DEFAULT_PRECISION)
        const dotY: Px = round(subtract(centerY, SYMBOL_OFFSET), DEFAULT_PRECISION)
        const symbolY: Px = round(add(centerY, SYMBOL_OFFSET), DEFAULT_PRECISION)

        jiNotationLevelCommaClassIds.forEach((jiNotationLevelCommaClassId: Id<CommaClass>): void => {
            const { minaName, commaAnalysis, representativeSymbol } = computeCommaClassInfo(jiNotationLevelCommaClassId)

            const positionX: Px = computeX(commaAnalysis.pitch)

            const adjustedUnicode = representativeSymbol.ascii === "/|~" ?
                representativeSymbol.unicode + "         " :
                representativeSymbol.ascii === ",,(|(" ?
                    "         " + representativeSymbol.unicode :
                    representativeSymbol.unicode

            jiNotationLevelCommaClassElements.push(
                `  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n` as Io,
            )
            jiNotationLevelCommaClassElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="10px" font-family="Helvetica">${representativeSymbol.ascii}</text>\n` as Io) // For searchability by ascii
            jiNotationLevelCommaClassElements.push(`  <text fill="black" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${adjustedUnicode}</text>\n` as Io)

            if (jiNotationLevel === JiNotationLevel.EXTREME) {
                const minaY: Px = round(subtract(symbolY, MINA_OFFSET), DEFAULT_PRECISION)
                jiNotationLevelCommaClassElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${formatMinaName(minaName)}</text>\n` as Io)
            }
        })
    })

    return jiNotationLevelCommaClassElements
}

export {
    visualizeJiNotationLevelCommaClasses,
}